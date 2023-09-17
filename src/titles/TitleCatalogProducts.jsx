import React from "react";
import { TitleCatalog } from "./styles";
import { useTranslation } from "react-i18next";

const TitleCatalogProducts = () => {
  const { t } = useTranslation();
  return <TitleCatalog>{t("titleCatalog")}</TitleCatalog>;
};

export default TitleCatalogProducts;
