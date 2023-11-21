import { Card, Col, Row, Statistic } from "antd";
import { valueType } from "antd/es/statistic/utils";
import { FC } from "react";

interface Sector {
  id: string;
  name: string;
  count: valueType | undefined;
}

export const SectorsTableWidget: FC<any> = ({ data = [] }) => {
  return (
    <div className="grid grid-cols-3 gap-4 text-center lg:grid-cols-6">
      {data.map((sector: Sector) => (
        <Card key={sector.id}>
          <h5 className="mb-5 font-bold">{sector.name}</h5>
          <p>{sector.count}</p>
        </Card>
      ))}
    </div>
  );
};
