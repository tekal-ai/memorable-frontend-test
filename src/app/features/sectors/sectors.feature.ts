import { useEffect, useState } from "react";
import { useRepositoryFeature } from "src/app/features/repositories/repositories.feature";
import { SectorsRepository } from "src/domain/sectors/sectors.domain";
import { SectorRequest } from "src/domain/sectors/sectors.interfaces";

export const useSectorsFeature = (repoId = "SectorsRepository") => {
  const { repository } = useRepositoryFeature<SectorsRepository>(repoId);

  const getSectorNames = async () => {
    return repository.getSectorsName();
  };

  const getSectorsCount = async () => {
    return repository.getSectorsCount();
  };

  return {
    getSectorNames,
    getSectorsCount,
  };
};

export const useSectors = () => {
  const [data, setData] = useState<SectorRequest[]>();
  const [loading, setLoading] = useState(true);

  const { getSectorNames, getSectorsCount } = useSectorsFeature();

  const processSectors = async () => {
    const [sectorsName, sectorsCount] = await Promise.all([
      getSectorNames(),
      getSectorsCount(),
    ]);

    return (
      sectorsName.map((sectorName) => {
        const sectorCount = sectorsCount.find(
          (count) => count.id === sectorName.id,
        );

        return {
          ...sectorName,
          ...sectorCount,
        };
      }) || []
    );
  };

  useEffect(() => {
    processSectors()
      .then((data) => setData(data))
      .finally(() => setTimeout(() => setLoading(false), 2000));
  }, []);

  return {
    data,
    loading,
  };
};
