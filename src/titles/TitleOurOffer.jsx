import React from "react";
import { TitleOurOffers } from "./styles";
import { useTranslation } from "react-i18next";

const TitleOurOffer = () => {
  const { t } = useTranslation();

  return <TitleOurOffers>{t("ourOffers")}</TitleOurOffers>;
};

export default TitleOurOffer;
