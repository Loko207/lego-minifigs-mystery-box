import ky from "ky";
import useSWRMutation from "swr/mutation";

export type PartlistsResponseType = {
  id: number;
  is_buildable: boolean;
  name: string;
  num_parts: number;
};

export type PartlistsArgsType = { name: string; num_parts: number };

export const usePartlists = () =>
  useSWRMutation<PartlistsResponseType, unknown, string, PartlistsArgsType>(
    `users/${import.meta.env.VITE_USER_TOKEN}/partlists/`,
    (url, { arg }) =>
      ky
        .post(`${import.meta.env.VITE_API_URL}/${url}`, {
          headers: {
            Authorization: `key ${import.meta.env.VITE_API_KEY}`,
          },
          json: arg,
        })
        .json()
  );
