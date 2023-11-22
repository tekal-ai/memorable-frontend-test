import { Empty } from "antd";
import { FC } from "react";

type EmptyCreateUIProps = {
  description?: string;
  body?: React.ReactNode;
  createButtonText?: string;
  onCreateButtonClick?: () => void;
};

export const EmptyCreateUI: FC<EmptyCreateUIProps> = ({
  body,
  description = "No data",
}) => {
  return (
    <>
      <Empty description={<span>{description}</span>}>{body}</Empty>
      <div className="h-10" />
    </>
  );
};
