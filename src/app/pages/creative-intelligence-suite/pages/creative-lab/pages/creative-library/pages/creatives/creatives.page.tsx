import { FC } from "react";
import useSWR from "swr";

import { CreativesTableWidget } from "./creatives.table.widget";
import { EmptyCreateUI } from "src/app/ui/empty/empty-create.ui";
import { useCreativesDomain } from "src/domain/creatives/creative.domain";
import { useSessionFeature } from "src/app/features/session/session.feature";

const CreativesPage: FC = () => {
  const { currentBrand } = useSessionFeature();
  const { getCreatives } = useCreativesDomain();

  const { data: creatives } = useSWR(
    { brandId: currentBrand?.id },
    getCreatives,
  );

  if (!creatives) {
    return <></>;
  }

  const hasCreatives = creatives.length > 0;

  return (
    <div>
      {hasCreatives ? (
        <CreativesTableWidget data={creatives} />
      ) : (
        <EmptyCreateUI description="You don't have any creatives yet." />
      )}
    </div>
  );
};

export default CreativesPage;
