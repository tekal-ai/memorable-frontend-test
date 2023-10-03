import { useEffect, useState } from "react";
import { useRepositoryFeature } from "src/app/features/repositories/repositories.feature";
import { CreativesRepository } from "src/domain/creatives/creatives.domain";
import {
  CreativeLibraryFilter,
  CreativeLibraryFolder,
} from "src/graphql/client";
import { useSessionFeature } from "../session/session.feature";

export const useCreativesFeature = (repoId = "CreativesRepository") => {
  const { repository } = useRepositoryFeature<CreativesRepository>(repoId);

  const listFolder = async (args: CreativeLibraryFilter) => {
    return repository.listFolder(args);
  };

  return {
    listFolder,
  };
};

export const useCurrentBrandCreatives = () => {
  const [data, setData] = useState<CreativeLibraryFolder>();
  const [loading, setLoading] = useState(true);

  const { currentBrand } = useSessionFeature();
  const { listFolder } = useCreativesFeature();

  useEffect(() => {
    listFolder({
      brandId: currentBrand?.id || "",
    })
      .then((data) => {
        setData(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [currentBrand]);

  return {
    data,
    loading,
  };
};
