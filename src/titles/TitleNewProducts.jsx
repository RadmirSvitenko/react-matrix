import React from "react";
import { useTranslation } from "react-i18next";
import { NewProducts } from "titles/styles";

const TitleNewProducts = () => {
  const { t } = useTranslation();
  return <NewProducts>{t("titleNewProducts")}</NewProducts>;
};

export default TitleNewProducts;
