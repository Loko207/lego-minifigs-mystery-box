import { FC } from "react";
import { Outlet } from "react-router-dom";

export const Layout: FC = () => {
  return (
    <main className="h-screen min-h-screen w-full bg-purple-600">
      <Outlet />
    </main>
  );
};
