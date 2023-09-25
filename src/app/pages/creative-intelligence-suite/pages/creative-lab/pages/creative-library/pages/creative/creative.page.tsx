import { Descriptions } from "antd";
import { FC } from "react";
import useSWR from "swr";
import { useCreativesDomain } from "src/domain/creatives/creatives.domain";
import { EmptyCreateUI } from "src/app/ui/empty/empty-create.ui";
import { CreativesTableWidget } from "src/app/pages/creative-intelligence-suite/pages/creative-lab/pages/creative-library/pages/creative/creatives.table.widget";
import { useSessionFeature } from "src/app/features/session/session.feature";

const CreativePage: FC = () => {
  const { currentBrand } = useSessionFeature();

  const { getCreatives } = useCreativesDomain(currentBrand?.id || "");

  const { data: creatives } = useSWR(
    ["gettingCreatives", currentBrand?.id],
    getCreatives,
  );

  const hasCreatives = creatives && creatives?.length > 0;

  if (!creatives) return <></>;

  return (
    <div>
      <header className="mb-4 flex gap-2">
        <div className="h-4" />
        <Descriptions title="Creatives"></Descriptions>
        <div className="flex-1" />
      </header>
      {hasCreatives ? (
        <CreativesTableWidget data={creatives} />
      ) : (
        <EmptyCreateUI description="There are no creatives for selected brand." />
      )}
    </div>
  );
};
export default CreativePage;
