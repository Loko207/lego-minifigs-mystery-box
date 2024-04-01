import ky from "ky";
import useSWRMutation from "swr/mutation";
import { PartDetailType } from "../form-shipment-inputs-config";

export type PartlistsPartType = { listId: number; parts: PartDetailType[] };

export const usePartlistsPart = () =>
  useSWRMutation<unknown, unknown, string, PartlistsPartType>(
    `users/${import.meta.env.VITE_USER_TOKEN}/partlists/`,
    (url, { arg: { listId, parts } }) =>
      ky
        .post(`${import.meta.env.VITE_API_URL}/${url}/${listId}/parts/`, {
          headers: {
            Authorization: `key ${import.meta.env.VITE_API_KEY}`,
          },
          json: parts,
        })
        .json()
  );
