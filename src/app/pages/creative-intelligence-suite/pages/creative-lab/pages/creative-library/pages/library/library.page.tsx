import { FC, useEffect, useState } from "react";
import { useSessionFeature } from "src/app/features/session/session.feature";
import { useCreativesDomain } from "src/domain/creatives/creatives.domain";
import { CreativeLibraryFolder, CreativeLibraryItem } from "src/graphql/client";
import { LibraryTableWidget } from "./library.table.widget";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { EmptyCreateUI } from "src/app/ui/empty/empty-create.ui";

const antIcon = <LoadingOutlined style={{ fontSize: 50 }} spin />;

const LibraryPage: FC = () => {
  const [creativesData, setCreativesData] = useState<CreativeLibraryItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { currentBrand } = useSessionFeature();
  const { getCreatives } = useCreativesDomain();

  useEffect(() => {
    setIsLoading(true);
    if (currentBrand?.id.length) {
      getCreatives({ brandId: currentBrand?.id })
        .then((response: CreativeLibraryFolder | null) => {
          if (response?.creatives) {
            setIsLoading(false);
            setCreativesData(response?.creatives);
          }
        })
        .catch((error) => {
          throw new Error(`Error fetching data: ${error}`);
        });
    }
  }, [currentBrand?.id]);

  const hasCreatives = creativesData?.length > 0;

  return (
    <div>
      {isLoading ? (
        <div className="w-100 flex items-center justify-center">
          <Spin indicator={antIcon} />
        </div>
      ) : (
        <>
          {hasCreatives ? (
            <LibraryTableWidget data={creativesData} />
          ) : (
            <EmptyCreateUI description="You don't have any creatives yet." />
          )}
        </>
      )}
    </div>
  );
};
export default LibraryPage;
