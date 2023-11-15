import { FC } from "react";
import { ButtonUI, ButtonUIProps } from "./button.ui";

export const PrimaryButtonUI: FC<ButtonUIProps> = (props) => {
  return (
    <ButtonUI
      {...props}
      style={{
        background: "linear-gradient(90deg, #9846FF 0%, #FF4646 100%)",
      }}
    >
      {props.children}
    </ButtonUI>
  );
};
