import { Typography } from "antd";
import { FC } from "react";

type SectorProps = {
  sectorName: string;
  sectorCount: number;
  className?: string;
};

const SectorUI: FC<SectorProps> = ({ sectorName, sectorCount, className }) => {
  return (
    <div
      className={className}
      style={{
        background: "#eee",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "150px",
        textAlign: "center",
        padding: "25px",
      }}
    >
      <Typography.Title level={5}>{sectorName}</Typography.Title>
      <Typography.Paragraph>{sectorCount}</Typography.Paragraph>
    </div>
  );
};
export default SectorUI;
