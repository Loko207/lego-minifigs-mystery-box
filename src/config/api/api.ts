import ky, { HTTPError } from "ky";
import { toast } from "react-toastify";
import { BareFetcher } from "swr";
import i18n from "../../i18n";

export const fetcher: BareFetcher = (url) =>
  ky
    .get(`${import.meta.env.VITE_API_URL}${url}`, {
      headers: {
        Authorization: `key ${import.meta.env.VITE_API_KEY}`,
      },
    })
    .json()
    .catch((e: HTTPError) =>
      toast.error(e.message || i18n.t("error|something-wrong"))
    );
