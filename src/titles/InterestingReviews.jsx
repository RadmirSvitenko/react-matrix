import React from "react";
import { TitleInterestingReviews } from "./styles";
import { useTranslation } from "react-i18next";

const InterestingReviews = () => {
  const { t } = useTranslation();
  return (
    <TitleInterestingReviews>{t("interestingReviews")}</TitleInterestingReviews>
  );
};

export default InterestingReviews;
