import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SWRConfig } from "swr";
import { fetcher } from "./config/api/api.ts";
import "./i18n";
import { LogoMinifigsMysteryBoxApp } from "./logo-minifigs-mystery-box-app.tsx";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SWRConfig
      value={{
        fetcher,
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
      }}
    >
      <LogoMinifigsMysteryBoxApp />
      <ToastContainer />
    </SWRConfig>
  </React.StrictMode>
);
