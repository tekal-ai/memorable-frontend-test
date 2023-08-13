interface SectorCardUIProps {
  name: string;
  count: number;
}

const SectorCardUI = ({ name, count }: SectorCardUIProps) => {
  return (
    <div className="flex h-32 w-48 flex-col items-center justify-between bg-gray-200 p-4">
      <div className="text-md flex h-12 items-center text-center font-bold">
        {name}
      </div>
      <div className="text-md h-10">{count}</div>
    </div>
  );
};

export default SectorCardUI;
