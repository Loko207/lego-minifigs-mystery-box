import { useMemo } from "react";
import useSWR from "swr";
import { PageableResponseType } from "../../config/types/types";
import { getRandomNumberBetween } from "../shared/utils";

export type MinifigsResponseType = {
  set_num: string;
  name: string;
  num_parts: number;
  set_img_url: string;
  set_url: string;
  last_modified_dt: string;
};
export const useMinifigs = () => {
  const { data, isLoading, error } = useSWR<
    PageableResponseType<MinifigsResponseType>
  >("/lego/minifigs/?search=harry+potter");

  const randomMinifigs = useMemo<MinifigsResponseType[]>(() => {
    if ((isLoading || !!error) && !data) return [];
    const randomData: MinifigsResponseType[] = [];
    while (randomData?.length < 3) {
      let randomMinifig = data?.results?.[getRandomNumberBetween(data?.count)];
      //prevent adding twice the same minifig
      //because of possibility to generate the same random number
      while (
        randomData?.some(
          (minifig) => minifig?.set_num === randomMinifig?.set_num
        )
      ) {
        randomMinifig = data?.results?.[getRandomNumberBetween(data?.count)];
      }
      randomMinifig && randomData.push(randomMinifig);
    }

    return randomData;
  }, [data, error, isLoading]);

  return {
    randomMinifigs,
    isLoading,
    error,
  };
};
