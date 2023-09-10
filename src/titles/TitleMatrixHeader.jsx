import React from "react";
import { TitleHeaderPresentation } from "./styles";
import { useTranslation } from "react-i18next";

const TitleMatrixHeader = () => {
  const { t } = useTranslation();
  return <TitleHeaderPresentation>{t("matrixSlogan")}</TitleHeaderPresentation>;
};

export default TitleMatrixHeader;
