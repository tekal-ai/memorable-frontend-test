import {
  useNavigate,
  useLocation,
  useParams,
  matchPath,
} from "react-router-dom";

export const useNavigationFeature = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const urlParams = useParams();

  const gotoHome = () => {
    goto("/");
  };

  const viewPortElement = document.querySelector(".viewport");

  const scrollUpPage = async (): Promise<void> => {
    return new Promise((resolve) => {
      if (!viewPortElement) return resolve();
      viewPortElement.scrollTo(0, 0);
      resolve();
    });
  };

  const getVariableParam = (paramName: string) => {
    return new URLSearchParams(window.location.search).get(paramName);
  };

  const getUrlParam = (paramName: string) => {
    return urlParams[paramName];
  };

  const goto = async (route: string) => {
    await scrollUpPage();
    navigate(route);
  };

  const getPathName = () => {
    return location.pathname;
  };

  const matchesPath = (path: string) => {
    return matchPath(path, getPathName());
  };

  const isRoot = () => {
    return getPathName() === "/";
  };

  const scrollTop = () => {
    if (!viewPortElement) return;
    viewPortElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const getScroll = () => {
    return viewPortElement?.scrollTop;
  };

  const watchScroll = (
    onScroll: (scroll?: number, progress?: number) => any,
  ) => {
    if (!viewPortElement) return;
    viewPortElement.addEventListener("scroll", () => {
      const scrollTop = viewPortElement.scrollTop;
      const scrollHeight = viewPortElement.scrollHeight;
      const percentage = (scrollTop / scrollHeight) * 100;
      onScroll(getScroll(), percentage);
    });
  };

  return {
    gotoHome,
    goto,
    getVariableParam,
    getUrlParam,
    getPathName,
    scrollTop,
    getScroll,
    watchScroll,
    isRoot,
    matchesPath,
  };
};
