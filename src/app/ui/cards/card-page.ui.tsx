import { FC } from "react";
import CardUI from "./card.ui";

const CardPageUI: FC = ({ children }) => {
  return (
    <div className="animFadeIn" style={{ padding: "1rem 1.8rem" }}>
      <CardUI>
        <div style={{ padding: "1rem" }}>{children}</div>
      </CardUI>
    </div>
  );
};
export default CardPageUI;
