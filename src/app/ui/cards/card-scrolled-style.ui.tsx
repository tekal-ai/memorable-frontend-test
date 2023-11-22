import { FC, useEffect, useState } from "react";

const viewport: HTMLElement | null = document.querySelector(".viewport");

export const CardScrolledStyle: FC<{
  className?: string;
  style?: any;
}> = ({ children, className, style }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const checkScroll = () => {
    if (!viewport?.scrollTop) return;
    if (viewport?.scrollTop > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    viewport?.addEventListener("scroll", checkScroll);

    return () => {
      viewport?.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <div
      className={className}
      style={{
        ...style,
        transition: "all 0.3s ease",
        boxShadow: isScrolled ? "0px 3px 7px -8px" : "none",
        paddingBottom: "1rem",
      }}
    >
      {children}
    </div>
  );
};
