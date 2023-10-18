import { FC } from "react";
import CardUI from "src/app/ui/cards/card.ui";
import { SectorItem } from "src/graphql/client";

interface Props {
  sector: SectorItem;
}

export const SectorWidget: FC<Props> = ({ sector }) => {
  return (
    <CardUI
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        margin: "2%",
        verticalAlign: "middle",
        textAlign: "center",
        border: "2px solid rgba(0, 0, 0, 0.02)",
        backgroundColor: "rgba(0, 0, 0, 0.02)",
        fontSize: "small",
        padding: "2%",
        flexBasis: "25%",
        height: "100px",
        minWidth: "100px",
        maxWidth: "150px",
      }}
    >
      <label style={{ fontWeight: "bold" }}>{sector.name}</label>
      <label>{sector.count}</label>
    </CardUI>
  );
};
