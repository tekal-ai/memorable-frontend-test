// sectors.page.tsx
import { FC, useState, useEffect } from "react";
import { LoadingPage } from "src/app/features/operations/features/loadings/pages/loading.page";
import SectorCard from "src/app/ui/cards/sector-card.ui";
import { sectorsNames, sectorsCounts } from "src/app/mocks/sectors.mock";

const SectorsPage: FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request with a timeout
    setTimeout(() => {
      setLoading(false);
    }, 1500); // This sets the spinner to run for 1.5 seconds. Adjust as needed.
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <LoadingPage />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
      {sectorsNames.map((sector) => {
        const count = sectorsCounts.find((s) => s.id === sector.id)?.count || 0;
        return <SectorCard key={sector.id} name={sector.name} count={count} />;
      })}
    </div>
  );
};

export default SectorsPage;
