import { FC } from "react";

type CardProps = {
  name?: string;
  numCount?: number;
  className?: string;
  style?: React.CSSProperties;
};

const CardSectorUI: FC<CardProps> = ({ name, numCount, className, style }) => {
  return (
    <div className={className} style={style}>
      <h3 className="text-center text-sm font-bold text-gray-800">{name}</h3>
      <span className="text-sm text-gray-500">{numCount}</span>
    </div>
  );
};
export default CardSectorUI;
