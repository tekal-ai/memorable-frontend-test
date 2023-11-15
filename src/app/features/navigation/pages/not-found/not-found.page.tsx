import { FC } from "react";
import AnimationUI from "src/app/ui/animations/animation.ui";
import { ButtonUI } from "src/app/ui/buttons/button.ui";
import { useNavigationFeature } from "../../navigation.feature";
import notFoundAnimation from "./animations/not-found.animation.json";

const NotFoundPage: FC = () => {
  const { gotoHome } = useNavigationFeature();

  return (
    <div className="animFadeIn flex h-screen flex-col items-center justify-center">
      <div>
        <AnimationUI isLoop={true} animation={notFoundAnimation} />
      </div>
      <h1
        style={{
          fontSize: "1.4rem",
          margin: "3rem 0",
        }}
      >
        Page Not Found
      </h1>
      <ButtonUI className="animFadeIn animDelay1" onClick={gotoHome}>
        Go to home
      </ButtonUI>
    </div>
  );
};
export default NotFoundPage;
