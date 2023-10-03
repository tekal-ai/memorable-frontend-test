import { FC, useMemo } from "react";
import { useCurrentBrandCreatives } from "src/app/features/creatives/creatives.feature";
import CardPageUI from "src/app/ui/cards/card-page.ui";
import { ImageUI } from "src/app/ui/images/image.ui";
import { SearchInputUI } from "src/app/ui/inputs/search-input.ui";
import { TableUI } from "src/app/ui/tables/table.ui";
import { CreativeLibraryItem } from "src/graphql/client";
import { format } from "date-fns";

const CreativeLibraryPage: FC = () => {
  const { data: creativesData } = useCurrentBrandCreatives();

  const columns = useMemo(
    () => [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        render: (name: string, creative: CreativeLibraryItem) => {
          return (
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <ImageUI src={creative.url} style={{ height: "1.5rem" }} />
              {name}
            </div>
          );
        },
      },
      {
        title: "Uploaded Date",
        dataIndex: "date",
        key: "date",
        render: (date) => {
          return <p>{format(new Date(date), "MM/dd/yyyy")}</p>;
        },
      },
      {
        title: "File Type",
        dataIndex: "type",
        key: "type",
        render: (type) => {
          return (
            <p
              style={{
                textTransform: "capitalize",
              }}
            >
              {type.toLowerCase()}
            </p>
          );
        },
      },
    ],
    [],
  );

  const data = useMemo(
    () =>
      creativesData?.creatives?.map((item, index) => ({
        key: index,
        name: item.name,
        date: item.updatedAt,
        type: item.fileType,
        url: item.url,
      })) || [],
    [creativesData],
  );

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
      <TableUI columns={columns} data={data} />
    </CardPageUI>
  );
};
export default CreativeLibraryPage;
