import { FC, Fragment } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { PageableResponseType } from "../../../../../../config/types/types";
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

export const MinifigParts: FC = () => {
  const { t } = useTranslation();
  const { id } = useParams<Record<"id", string>>();
  const { data: partsData, isLoading: isPartsLoading } = useSWR<
    PageableResponseType<PartType>
  >(`/lego/minifigs/${id}/parts`);

  return (
    <>
      <p className="self-start text-3xl font-bold">
        {t("minifig|summary|parts", { count: partsData?.count })}
      </p>
      {isPartsLoading
        ? [1, 2].map((e) => (
            <Fragment key={e}>
              <div className="h-16 w-full animate-pulse rounded-lg bg-gray-400" />
            </Fragment>
          ))
        : partsData?.results?.map((part) => {
            return (
              <div key={part?.id} className="flex gap-6 self-start">
                <img
                  src={part?.part?.part_img_url}
                  className="max-h-16 max-w-16"
                />
                <div className="flex flex-col gap-1">
                  <p className="text-xl">{part?.part?.name}</p>
                  <p
                    className="text-xl"
                    style={{
                      color: `#${part?.color?.rgb}`,
                    }}
                  >
                    {part?.color?.rgb}
                  </p>
                </div>
              </div>
            );
          })}
    </>
  );
};
