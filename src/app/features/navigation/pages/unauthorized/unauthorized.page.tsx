import { FC } from "react";

const UnauthorizedPage: FC = () => {
  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center text-red-500"
      role="alert"
    >
      <h2 className="text-lg font-semibold">
        You don&apos;t have enough permissions to visit this page.
      </h2>
    </div>
  );
};
export default UnauthorizedPage;
