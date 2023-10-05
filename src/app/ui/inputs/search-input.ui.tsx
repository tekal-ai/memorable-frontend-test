import { Input } from "antd";
import { FC } from "react";
import { SearchOutlined } from "@ant-design/icons";

interface SearchInputUIProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInputUI: FC<SearchInputUIProps> = (props) => {
  return (
    <div>
      <Input placeholder="Search..." prefix={<SearchOutlined />} {...props}/>
    </div>
  );
};
