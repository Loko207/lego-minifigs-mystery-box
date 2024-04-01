import { FC } from "react";
import { useTranslation } from "react-i18next";
import { PATH } from "../../config/routes/routes";
import { LinkButton } from "../shared";

const Home: FC = () => {
  const { t } = useTranslation();
  return (
    <section className="flex h-screen flex-col items-center justify-center gap-12">
      <h1 className="text-7xl font-bold uppercase tracking-wider text-white [text-shadow:2px_2px_4px_#6B7280]">
        {t("home|title")}
      </h1>
      <LinkButton to={PATH.MINIFIGS}>{t("shared|button|lets-go")}</LinkButton>
    </section>
  );
};

export default Home;
