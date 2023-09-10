import React from "react";
import { useTranslation } from "react-i18next";
import { TopSales } from "titles/styles";

const TitleTopSales = () => {
  const { t } = useTranslation();
  return <TopSales>{t("titleTopSales")}</TopSales>;
};

export default TitleTopSales;
