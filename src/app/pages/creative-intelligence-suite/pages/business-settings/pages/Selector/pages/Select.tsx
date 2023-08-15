import { useState } from "react";
import CardPageUI from "src/app/ui/cards/card-page.ui";
import Card from "./SelectCard";
import { SpinnerUI } from "src/app/features/operations/ui/spinner.ui";
const Select = () => {
  const [load, setLoad] = useState(true);
  setTimeout(() => {
    setLoad(false);
  }, 1300);
  return (
    <CardPageUI>
      {load ? (
        <div className="flex h-[100vh] items-center justify-center">
          <SpinnerUI />
        </div>
      ) : (
        <>
          <h3 className="mb-8 mt-8 text-3xl font-bold">Selectors</h3>
          <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </>
      )}
    </CardPageUI>
  );
};
export default Select;
