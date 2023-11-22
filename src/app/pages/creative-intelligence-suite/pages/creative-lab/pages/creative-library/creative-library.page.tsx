import { FC, useEffect, useState } from "react";
import CardPageUI from "src/app/ui/cards/card-page.ui";
import { SearchInputUI } from "src/app/ui/inputs/search-input.ui";
import { Descriptions } from "antd";
import { useSessionFeature } from "src/app/features/session/session.feature";
import { EmptyCreateUI } from "src/app/ui/empty/empty-create.ui";
import { CreativesTableWidget } from "./creatives.table.widget";
import axios from "axios";
import { LoadingOutlined } from "@ant-design/icons";

interface Creative {
  creativeId: string;
  name: string;
  fileType: string;
  url: string;
  clipEmbeddingUrl: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

const CreativeLibraryPage: FC = () => {
  const session = useSessionFeature();
  const { user, currentBrand } = session;

  const [creatives, setCreatives] = useState<Creative[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const endpoint = "https://api-staging.memorable.io/graphql";
  const token = localStorage.getItem("token")?.replace(/["]+/g, "");
  const query = `query ListFolder($input: CreativeLibraryFilter!) {
    listFolder(input: $input) {
      creatives {
        creativeId
        name
        fileType
        url
        clipEmbeddingUrl
        status
        createdAt
        updatedAt
      }
    }
  }`;
  const variables = {
    input: {
      brandId: `${currentBrand?.id}`,
    },
  };
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const fetchData = async () => {
    try {
      const response = await axios.post(
        endpoint,
        { query, variables },
        { headers },
      );

      if (response.data.errors) {
        setError(response.data.errors);
      } else {
        const rawCreatives = response.data.data.listFolder.creatives;
        const sortedCreatives = [...rawCreatives].sort((a, b) =>
          a.name.localeCompare(b.name),
        );
        setCreatives(sortedCreatives);
      }

      setLoading(false);
    } catch (err: any) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentBrand]);

  if (loading) {
    return (
      <CardPageUI>
        <LoadingOutlined rev={undefined} />
        <p>Loading...</p>
      </CardPageUI>
    );
  }

  if (error) {
    return <div>Error: An internal error has ocurred. Try again later.</div>;
  }

  const hasCreatives = creatives?.length > 0;

  return (
    <CardPageUI>
      <header
        className="mb-4 flex gap-4"
        style={{
          position: "sticky",
          top: "0px",
          zIndex: "12",
          background: "white",
          padding: "13px 0",
        }}
      >
        <SearchInputUI />
      </header>
      {/* <pre>Insert Table here</pre> */}
      <header className="mb-4 flex gap-2">
        <div className="h-4" />
        <Descriptions title="Creatives"></Descriptions>
        <div className="flex-1" />
      </header>
      {hasCreatives ? (
        <CreativesTableWidget data={creatives} />
      ) : (
        <EmptyCreateUI description="Brand doesn't have any creatives yet." />
      )}
    </CardPageUI>
  );
};
export default CreativeLibraryPage;
