import ky from "ky";
import React from "react";
import ReactDOM from "react-dom/client";
import { BareFetcher, SWRConfig } from "swr";
import "./i18n";
import { LogoMinifigsMysteryBoxApp } from "./logo-minifigs-mystery-box-app.tsx";
import "./main.css";

const fetcher: BareFetcher = (url) =>
  ky
    .get(`${import.meta.env.VITE_API_URL}${url}`, {
      headers: {
        Authorization: `key ${import.meta.env.VITE_API_KEY}`,
      },
    })
    .json();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SWRConfig value={{ fetcher }}>
      <LogoMinifigsMysteryBoxApp />
    </SWRConfig>
  </React.StrictMode>
);
