import { FC } from "react";
import { CustomError } from "./error.model";

type ErrorUIProps = {
  error: CustomError;
};
export const ErrorUI: FC<ErrorUIProps> = ({ error }) => {
  return (
    <div className="flex flex-col items-center" style={{}}>
      <h3
        className="animFadeIn"
        style={{
          fontWeight: "bold",
          fontSize: "0.9rem",
          marginBottom: "0.9rem",
        }}
      >
        {error.extensions.code.replace(/_/g, " ")}
      </h3>
      {error.path ? (
        <pre
          style={{
            padding: "8px 11px",
            background: "whitesmoke",
            borderRadius: "4px",
            marginBottom: "0.8rem",
            fontSize: "0.8rem",
          }}
          title={error.path?.join(", ")}
        >
          {error.path[0]}
        </pre>
      ) : (
        <></>
      )}
      <p
        style={{
          margin: "1rem 0",
          color: "#2e2e2e",
        }}
      >
        {error.message}
      </p>
    </div>
  );
};
