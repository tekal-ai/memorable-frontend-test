import { FC } from "react";
import { Descriptions } from "antd";

type Props = {
  title: string;
};

const PageHeader: FC<Props> = ({ title }) => {
  return (
    <div>
      <header className="mb-4 flex gap-2">
        <div className="h-4" />
        <Descriptions title={title}></Descriptions>
        <div className="flex-1" />
      </header>
    </div>
  );
};
export default PageHeader;