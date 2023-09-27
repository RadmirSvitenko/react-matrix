import React from "react";
import { useTranslation } from "react-i18next";
import {
  CustomTextareaReviews,
  ReviewsButton,
  ReviewsContainer,
} from "./styles";
import TitleProductReviews from "titles/titleProductDetailsReviews";
import { Box } from "@mui/material";

const Reviews = () => {
  const { t } = useTranslation();

  return (
    <ReviewsContainer>
      <TitleProductReviews />

      <CustomTextareaReviews
        aria-label="reviews"
        minRows={3}
        placeholder={t("textareaLeaveReviewField")}
      />
      <ReviewsButton variant="contained">{t("submitReview")}</ReviewsButton>
    </ReviewsContainer>
  );
};

export default Reviews;
