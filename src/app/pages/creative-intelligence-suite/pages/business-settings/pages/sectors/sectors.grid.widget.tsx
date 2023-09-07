import { FC } from "react";

interface SectorsGridWidgetProps {
  data: any[];
}

export const SectorsGridWidget: FC<SectorsGridWidgetProps> = ({
  data = [],
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {data.map((item) => (
        <article
          key={item.id}
          className="flex h-28 w-40 flex-col justify-center gap-2 bg-zinc-100 text-center"
        >
          <span className="text-sm font-bold text-gray-700">{item.name}</span>
          <span className="text-sm text-gray-700">{item.count}</span>
        </article>
      ))}
    </div>
  );
};
