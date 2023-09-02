import { FC } from "react";
import CardPageUI from "src/app/ui/cards/card-page.ui";
import { EmptyCreateUI } from "src/app/ui/empty/empty-create.ui";
import { SearchInputUI } from "src/app/ui/inputs/search-input.ui";
import { useSectorsDomain } from "src/domain/sectors/sectors.domain";
import { SectorsTableWidget } from "./sectors.table.widget";
import { useSessionFeature } from "src/app/features/session/session.feature";

const SectorsPage: FC = () => {
  const { currentBrand } = useSessionFeature();
  const { sectors } = useSectorsDomain();

  return (
    <CardPageUI>
      {sectors?.length > 0 ? (
        <SectorsTableWidget
          data={sectors}
          currentBrandSectors={currentBrand?.sector}
        />
      ) : (
        <EmptyCreateUI description="You don't have any sectors yet." />
      )}
    </CardPageUI>
  );
};
export default SectorsPage;
