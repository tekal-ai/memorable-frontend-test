import { FC } from "react";
import { EmptyCreateUI } from "./empty-create.ui";

type EmptyCreatePageProps = {
  description?: string;
  body?: React.ReactNode;
  style?: React.CSSProperties;
  createButtonText?: string;
  onCreateButtonClick?: () => void;
};

export const EmptyCreatePage: FC<EmptyCreatePageProps> = (props) => {
  const { style = {} } = props;
  return (
    <div
      className="animFadeIn flex h-full items-center justify-center"
      style={style}
    >
      <EmptyCreateUI {...props} />
    </div>
  );
};
