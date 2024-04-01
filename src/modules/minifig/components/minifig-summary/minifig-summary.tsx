import { FC, ReactNode } from "react";
import { MinifigDetails, MinifigParts } from "./components";

export const MinifigSummary: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <section className="flex h-full max-w-lg flex-1 flex-col items-center gap-6 rounded-lg bg-white p-8">
      <MinifigDetails />
      <MinifigParts />
      {children}
    </section>
  );
};
