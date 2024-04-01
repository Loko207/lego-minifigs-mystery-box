import { FC, ReactNode } from "react";
import { Outlet } from "react-router-dom";

export const Layout: FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <main className="min-h-screen w-full bg-indigo-950 bg-[url('src/assets/background.svg?react')] bg-center">
      {children || <Outlet />}
    </main>
  );
};
