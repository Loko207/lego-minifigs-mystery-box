import { FC } from "react";
import { useTranslation } from "react-i18next";
import { PATH } from "../../config/routes/routes";
import { LinkButton } from "../shared";

const Home: FC = () => {
  const { t } = useTranslation();
  return (
    <section className="flex h-full flex-col items-center justify-center gap-8">
      <h1 className="text-4xl font-bold uppercase tracking-wider text-white">
        {t("home|title")}
      </h1>
      <LinkButton to={PATH.MINIFIGS}>{t("shared|button|lets-go")}</LinkButton>
    </section>
  );
};

export default Home;
