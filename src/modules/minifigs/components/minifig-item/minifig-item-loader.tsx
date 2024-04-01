import { FC } from "react";

export const MinifigItemLoader: FC = () => {
  return (
    <div className="flex min-h-[396px] w-80 flex-col items-center gap-6 rounded-lg bg-white p-6">
      <div className="flex h-full w-full animate-pulse flex-col justify-between gap-8">
        <div className="h-44 w-full rounded-lg bg-gray-400"></div>
        <div className="flex flex-col gap-4">
          <div className="h-8 w-full rounded-lg bg-gray-400"></div>
          <div className="h-16 w-full rounded-lg bg-gray-400"></div>
        </div>
      </div>
    </div>
  );
};
