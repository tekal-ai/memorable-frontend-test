import { FC, useEffect } from "react";
import { SelectInputUI } from "src/app/ui/inputs/select/select.ui";
import { useSessionFeature } from "src/app/features/session/session.feature";
import { Brand } from "src/graphql/client";

const LOCAL_STORAGE_KEY = "selectedBrandId";

export const BrandSelectorWidget: FC = () => {
  const { selectBrand, currentBrand } = useSessionFeature();

  const { user } = useSessionFeature();

  const brands = user?.businessAccount?.brands ?? [];

  const saveSelectedBrandIdToLocalStorage = (brandId: string) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, brandId);
  };

  const getSelectedBrandIdFromLocalStorage = () => {
    return localStorage.getItem(LOCAL_STORAGE_KEY);
  };

  const doesBrandBelongToUser = (brandId: string, userBrands: Brand[]) => {
    return userBrands.some((userBrand) => userBrand.id === brandId);
  };

  useEffect(() => {
    const storedSelectedBrandId = getSelectedBrandIdFromLocalStorage();
    if (
      storedSelectedBrandId &&
      doesBrandBelongToUser(storedSelectedBrandId, brands)
    ) {
      const selectedBrand = brands.find(
        (brand) => brand.id === storedSelectedBrandId,
      );
      if (selectedBrand) {
        selectBrand(selectedBrand);
      }
    } else {
      const defaultSelectedBrand = brands[brands.length - 1];
      selectBrand(defaultSelectedBrand);
    }
  }, [user]);

  useEffect(() => {
    if (currentBrand) {
      saveSelectedBrandIdToLocalStorage(currentBrand.id);
    }
  }, [currentBrand]);

  const onChangeHandler = (value: string) => {
    const selectedBrand = brands?.find((b) => b.id === value);
    if (!selectedBrand) return;
    return selectBrand(selectedBrand);
  };

  return (
    <SelectInputUI
      value={currentBrand?.id}
      onChange={onChangeHandler}
      isSearchable={false}
      options={brands?.map((b) => ({
        label: b.name,
        key: b.id,
      }))}
    />
  );
};
