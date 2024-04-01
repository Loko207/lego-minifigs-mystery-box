import { FC, ReactNode } from "react";
import { Outlet } from "react-router-dom";

export const Layout: FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <main className="min-h-screen w-full bg-indigo-950 bg-[url('/background.svg')] bg-center">
      {children || <Outlet />}
    </main>
  );
};
