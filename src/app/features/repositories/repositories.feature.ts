import { useMemo } from "react";
import { repository } from "./catalog";

export const currentRepository = new Map();

export const useRepositoryFeature = <T>(name: string) => {
  const repository: T = useMemo(() => getRepository(name), [name]);
  return {
    repository,
  };
};

const getRepository = (repositoryName: string) => {
  if (!currentRepository.has(repositoryName)) {
    const repositoryClass = repository.get(repositoryName);
    try {
      currentRepository.set(repositoryName, new repositoryClass());
    } catch (error) {
      throw new Error(
        `Repository ${repositoryName} not found, please check if you have imported it.`,
      );
    }
  }
  return currentRepository.get(repositoryName);
};
