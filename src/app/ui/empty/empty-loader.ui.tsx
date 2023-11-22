import { FC } from "react";
import { SpinnerUI } from "src/app/features/operations/ui/spinner.ui";

export const EmptyLoaderUI: FC<{
  isLoading: boolean;
}> = ({ children, isLoading }) => {
  return (
    <div className="relative">
      {isLoading && (
        <div
          style={{
            position: "absolute",
            height: "100%",
            textAlign: "center",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <SpinnerUI />
        </div>
      )}
      <div
        style={{
          transition: "opacity 0.3s",
          opacity: isLoading ? 0.2 : 1,
        }}
      >
        {children}
      </div>
    </div>
  );
};
