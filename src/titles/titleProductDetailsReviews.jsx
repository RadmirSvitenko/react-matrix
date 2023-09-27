import React from "react";
import { useTranslation } from "react-i18next";
import { TitleReviews } from "titles/styles";

const TitleProductReviews = () => {
  const { t } = useTranslation();
  return <TitleReviews>{t("titleProductDetailsReviews")}</TitleReviews>;
};

export default TitleProductReviews;
