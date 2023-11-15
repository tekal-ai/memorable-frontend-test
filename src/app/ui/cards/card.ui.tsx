import { FC } from "react";

type CardProps = {
  className?: string;
  style?: React.CSSProperties;
};

const CardUI: FC<CardProps> = ({ children, className, style = {} }) => {
  return (
    <div
      className={className}
      style={{
        background: "#FFFFFF",
        boxShadow:
          "-2px 2px 4px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)",
        borderRadius: "6px",
        ...style,
      }}
    >
      {children}
    </div>
  );
};
export default CardUI;
