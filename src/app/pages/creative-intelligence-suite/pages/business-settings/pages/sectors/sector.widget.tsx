import { FC } from "react";
import CardUI from "src/app/ui/cards/card.ui";

export const SectorWidget: FC<any> = ({ sector }) => {
  return (
    <CardUI
      style={{
        display: "inline-block",
        margin: "10px",
        width: "150px",
        height: "150px",
        verticalAlign: "middle",
        textAlign: "center",
        backgroundColor: "#DCDCDC",
      }}
      key={sector.sectorId}
    >
      <div
        style={{
          position: "relative",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <div style={{ margin: "10px", fontWeight: "bold", fontSize: "small" }}>
          {sector.name}
        </div>
        <div style={{ margin: "10px", fontSize: "small" }}>{sector.count}</div>
      </div>
    </CardUI>
  );
};
