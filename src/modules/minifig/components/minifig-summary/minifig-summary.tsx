import { FC, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import {
  MinifigResponseType,
  PageableResponseType,
} from "../../../../config/types/types";

//we can add type for unknown types unnecessary for task purpose
type PartType = {
  id: number;
  inv_part_id: number;
  part: {
    part_num: string;
    name: string;
    part_cat_id: number;
    part_url: string;
    part_img_url: string;
    external_ids: unknown;
    print_of: unknown;
  };
  color: {
    id: number;
    name: string;
    rgb: string;
    is_trans: boolean;
    external_ids: unknown;
  };
  set_num: string;
  quantity: number;
  is_spare: boolean;
  element_id: string;
  num_sets: number;
};

export const MinifigSummary: FC<{ children: ReactNode }> = ({ children }) => {
  const { t } = useTranslation();
  const { id } = useParams<Record<"id", string>>();
  const { data } = useSWR<MinifigResponseType>(`/lego/minifigs/${id}`);
  const { data: partsData } = useSWR<PageableResponseType<PartType>>(
    `/lego/minifigs/${id}/parts`
  );
  return (
    <section className="flex flex-1 flex-col items-center gap-6 rounded bg-white p-8">
      <h2 className="self-start">{t("shared|text|summary")}</h2>
      <img src={data?.set_img_url} alt={data?.name} className="max-h-60" />
      <p>{data?.name}</p>
      <>
        <p className="self-start">
          {t("minifig|summary|parts", { count: partsData?.count })}
        </p>
        {partsData?.results?.map((part) => {
          return (
            <div key={part?.id} className="flex gap-6 self-start">
              <img
                src={part?.part?.part_img_url}
                className="max-h-16 max-w-16"
              />
              <div className="flex flex-col gap-4">
                <p>{part?.part?.name}</p>
                <p className={`text-[#${part?.color?.rgb}]`}>
                  {part?.color?.rgb}
                </p>
              </div>
            </div>
          );
        })}
      </>
      {children}
    </section>
  );
};
