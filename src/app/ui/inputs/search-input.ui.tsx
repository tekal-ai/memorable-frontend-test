import { Input } from "antd";
import { FC } from "react";
import { SearchOutlined } from "@ant-design/icons";

export const SearchInputUI: FC = () => {
  return (
    <div>
      <Input
        placeholder="Search..."
        prefix={<SearchOutlined rev={undefined} />}
      />
    </div>
  );
};
