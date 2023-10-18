import { FC } from "react";
import useSWR from "swr";
import { useCreativesDomain } from "src/domain/creatives/creatives.domain";
import { EmptyCreateUI } from "src/app/ui/empty/empty-create.ui";
import { CreativesTableWidget } from "src/app/pages/creative-intelligence-suite/pages/creative-lab/pages/creative-library/pages/creative/creatives.table.widget";
import { useSessionFeature } from "src/app/features/session/session.feature";
import PageHeader from "src/app/ui/header/header.ui";

const CreativePage: FC = () => {
  const { currentBrand } = useSessionFeature();

  const { getCreatives } = useCreativesDomain(currentBrand?.id || "");

  const { data: creatives } = useSWR(
    ["gettingCreatives", currentBrand?.id],
    getCreatives,
  );

  return (
    <div>
      <PageHeader title="Creatives" />
      {creatives?.length ? (
        <CreativesTableWidget data={creatives} />
      ) : (
        <EmptyCreateUI description="No creatives for current brand" />
      )}
    </div>
  );
};

export default CreativePage;
