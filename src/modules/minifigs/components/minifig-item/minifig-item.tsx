import { FC } from "react";
import { useTranslation } from "react-i18next";
import { cnBase } from "tailwind-variants";
import { MinifigResponseType } from "../../../../config/types/types";
import { LinkButton } from "../../../shared";

type MinifigItemProps = {
  handleSelectMinifig: () => void;
  isSelected: boolean;
} & MinifigResponseType;

export const MinifigItem: FC<MinifigItemProps> = ({
  set_num,
  set_img_url,
  name,
  set_url,
  handleSelectMinifig,
  isSelected,
}) => {
  const { t } = useTranslation();
  return (
    <div
      key={set_num}
      className={cnBase(
        "flex min-h-[396px] w-80 flex-col items-center gap-6 rounded-lg bg-white p-6 hover:cursor-pointer hover:shadow-[0px_0px_16px_6px] hover:shadow-orange-500",
        isSelected && "shadow-[0px_0px_16px_6px] shadow-orange-700"
      )}
      onClick={handleSelectMinifig}
    >
      <img src={set_img_url} alt={name} className="max-h-44" />
      <div className="mt-auto flex flex-col items-center justify-center">
        <p className="line-clamp-3 text-center text-xl">{name}</p>
        <LinkButton to={set_url} variant="link">
          {t("shared|button|show-details")}
        </LinkButton>
      </div>
    </div>
  );
};
