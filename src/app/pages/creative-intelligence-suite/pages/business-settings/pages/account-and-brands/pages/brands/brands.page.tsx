import { FC } from "react";
import { EmptyCreateUI } from "src/app/ui/empty/empty-create.ui";
import { useSessionFeature } from "src/app/features/session/session.feature";
import { BrandsTableWidget } from "./brands.table.widget";
import HeaderUI from "src/app/ui/header/header.ui";

const BrandPage: FC = () => {
  const { user } = useSessionFeature();

  const brands = user.businessAccount?.brands ?? [];

  const hasBrands = brands?.length > 0;

  return (
    <div>
      <HeaderUI title="Brands" />
      {hasBrands ? (
        <BrandsTableWidget data={brands} />
      ) : (
        <EmptyCreateUI description="You don't have any brands yet." />
      )}
    </div>
  );
};
export default BrandPage;
