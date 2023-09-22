// SectorCard.tsx
import { FC } from "react";

interface SectorCardProps {
  name: string;
  count: number;
}

const SectorCard: FC<SectorCardProps> = ({ name, count }) => {
  return (
    <div className="my-4 mx-6 h-36 w-36 px-1 md:my-2 md:mx-4">
      <div className="flex h-full flex-col items-center justify-center bg-gray-200 p-4">
        <h2 className="mb-4 w-full break-words px-2 text-center text-sm font-bold">
          {name}
        </h2>
        <p className="text-center">{count}</p>
      </div>
    </div>
  );
};

export default SectorCard;
