import { FC, useEffect, useState } from "react";
import { useNavigationFeature } from "src/app/features/navigation/navigation.feature";
import { ButtonUI } from "../../ui/buttons/button.ui";

export const ScrollTopWidget: FC = ({ children }) => {
  const { scrollTop, watchScroll } = useNavigationFeature();
  const [scrollViewport, setScrollViewport] = useState(0);

  useEffect(() => {
    watchScroll((scroll) => {
      if (scroll === undefined) return;
      setScrollViewport(scroll);
    });
  }, []);

  if (scrollViewport < 100) return <></>;

  return (
    <div>
      <ButtonUI type="text" onClick={scrollTop}>
        <div
          className="flex items-center gap-2
        "
        >
          {children}
        </div>
      </ButtonUI>
    </div>
  );
};
