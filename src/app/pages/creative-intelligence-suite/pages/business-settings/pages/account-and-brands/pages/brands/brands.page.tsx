import { FC } from "react";
import { Descriptions } from "antd";
import { EmptyCreateUI } from "src/app/ui/empty/empty-create.ui";
import { useSessionFeature } from "src/app/features/session/session.feature";
import { BrandsTableWidget } from "./brands.table.widget";

const BrandPage: FC = () => {
  const { user } = useSessionFeature();

  const brands = user.businessAccount?.brands ?? [];

  const hasBrands = brands?.length > 0;

  return (
    <div>
      <header className="mb-4 flex gap-2">
        <div className="h-4" />
        <Descriptions title="Brands"></Descriptions>
        <div className="flex-1" />
      </header>
      {hasBrands ? (
        <BrandsTableWidget data={brands} />
      ) : (
        <EmptyCreateUI description="You don't have any brands yet." />
      )}
    </div>
  );
};
export default BrandPage;
