import { useState, useEffect } from "react";

export const useVersionFeature = () => {
  const [currentVersion, setCurrentVersion] = useState("0.0.0");
  const LAST_DEPLOY_DATE = "2023-06-19T16:32:12.972Z";

  useEffect(() => {
    const fetchVersion = async () => {
      try {
        const pkg = await import("../../../package.json");
        setCurrentVersion(pkg.version);
      } catch (error) {
        // console.error("Error fetching package.json:", error);
      }
    };

    fetchVersion();
  }, []);

  const getCurrentVersion = () => currentVersion;
  const getLastDeployDate = () => new Date(LAST_DEPLOY_DATE);

  return {
    getCurrentVersion,
    getLastDeployDate,
  };
};
