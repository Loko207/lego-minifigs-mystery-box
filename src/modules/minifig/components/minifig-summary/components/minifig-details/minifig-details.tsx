import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { MinifigResponseType } from "../../../../../../config/types/types";

export const MinifigDetails: FC = () => {
  const { t } = useTranslation();
  const { id } = useParams<Record<"id", string>>();
  const { data, isLoading: isMinifigLoading } = useSWR<MinifigResponseType>(
    `/lego/minifigs/${id}`
  );
  return (
    <>
      <h2 className="self-start text-5xl font-bold">
        {t("shared|text|summary")}
      </h2>

      {isMinifigLoading ? (
        <>
          <div className="h-60 w-60 animate-pulse rounded-lg bg-gray-400" />
          <div className="h-8 w-full animate-pulse rounded-lg bg-gray-400" />
        </>
      ) : (
        <>
          <img src={data?.set_img_url} alt={data?.name} className="max-h-60" />
          <p className="text-center text-2xl">{data?.name}</p>
        </>
      )}
    </>
  );
};
