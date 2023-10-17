import { FC } from "react";
import CardUI from "src/app/ui/cards/card.ui";

type Props = {
  name: string;
  count: number;
};

export const SectorCardWidget: FC<Props> = ({ name, count }) => {
  return (
    <CardUI>
      <div className="flex h-40 flex-col items-center justify-around bg-gray-100 px-6 py-4">
        <h2 className="text-center font-medium text-xs md:text-sm lg:text-base">{name}</h2>
        <p className="text-center">{count}</p>
      </div>
    </CardUI>
  );
};
