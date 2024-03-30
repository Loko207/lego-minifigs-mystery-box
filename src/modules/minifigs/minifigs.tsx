import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { MinifigResponseType } from "../../config/types/types";
import { Button } from "../shared";
import { MinifigItem } from "./components";
import { useMinifigs } from "./use-minifigs";

const Minifigs: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [selectedMinifig, setSelectedMinifig] =
    useState<MinifigResponseType | null>(null);
  const { randomMinifigs } = useMinifigs();

  return (
    <section className="flex h-full flex-col items-center justify-center gap-8">
      <h1 className="text-4xl font-bold uppercase tracking-wider text-white">
        {t("minifigs|title")}
      </h1>
      <div className="flex gap-8">
        {randomMinifigs?.map((minifig) => (
          <MinifigItem
            key={minifig?.name}
            {...minifig}
            isSelected={minifig.set_num === selectedMinifig?.set_num}
            handleSelectMinifig={() =>
              selectedMinifig?.set_num === minifig.set_num
                ? setSelectedMinifig(null)
                : setSelectedMinifig(minifig)
            }
          />
        ))}
      </div>
      <Button
        disabled={!selectedMinifig}
        onClick={() => selectedMinifig && navigate(selectedMinifig.set_num)}
      >
        {t("shared|button|proceed-to-shipment")}
      </Button>
      {/* 
          if we decide to add modal instead of redirection to minifig page,
          the modal should be added here to have one modal for all minifigs
          to which one we should pass proper minifig details
      */}
    </section>
  );
};

export default Minifigs;
