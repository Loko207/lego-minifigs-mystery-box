import { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { LoaderIcon } from "./assets/icons";
import { PATH } from "./config/routes/routes";
import { Layout } from "./modules/shared";

const Home = lazy(() => import("./modules/home/home"));
const Minifigs = lazy(() => import("./modules/minifigs/minifigs"));
const Minifig = lazy(() => import("./modules/minifig/minifig"));

export const LogoMinifigsMysteryBoxApp = () => {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="flex h-screen w-full items-center justify-center">
            <LoaderIcon className="animate-spin" />
          </div>
        }
      >
        <Routes>
          <Route element={<Layout />}>
            <Route path={PATH.HOME} element={<Home />} />
            <Route path={PATH.MINIFIGS} element={<Minifigs />} />
            <Route path={PATH.MINIFIG} element={<Minifig />} />
            <Route path="*" element={<Navigate to={PATH.HOME} />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
