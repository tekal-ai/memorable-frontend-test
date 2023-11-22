import { useEffect } from "react";
import intl from "react-intl-universal";

import useForceUpdate from "use-force-update";

import enUS from "./locales/en-US.json";

const LOCALES_LIST = [
  {
    label: "English",
    value: "en-US",
  },
];

const LOCALE_DATA = {
  "en-US": enUS,
};

export const useTranslationFeature = () => {
  const forceUpdate = useForceUpdate();

  const defaultLocale = "en-US";

  const initializeIntl = () => {
    let currentLocale = intl.determineLocale({
      urlLocaleKey: "lang",
      cookieLocaleKey: "lang",
    });

    if (!LOCALES_LIST.some((item) => item.value === currentLocale)) {
      currentLocale = defaultLocale;
    }

    setCurrentLocale(currentLocale);
  };

  const setCurrentLocale = (currentLocale: string) => {
    intl.init({
      currentLocale,
      locales: LOCALE_DATA,
    });
  };

  const changeLang = (value: string) => {
    setCurrentLocale(value);
    forceUpdate();
  };

  useEffect(() => {
    initializeIntl();
  }, []);

  return {
    t: intl.get.bind(intl),
    changeLang,
  };
};
