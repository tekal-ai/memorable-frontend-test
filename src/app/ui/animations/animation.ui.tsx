import lottieWeb from "lottie-web";
import { FC, useEffect, useRef } from "react";

const AnimationUI: FC<any> = ({
  animation,
  className,
  style,
  isLoop = false,
  speed = 1,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const animationInstance = lottieWeb.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: isLoop,
        autoplay: true,
        animationData: animation,
      });

      animationInstance.setSpeed(speed);

      return () => {
        animationInstance.destroy();
      };
    }
  }, [animation, isLoop, speed]);

  return <div ref={containerRef} className={className} style={style}></div>;
};

export default AnimationUI;
