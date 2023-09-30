import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  CustomTextareaReviews,
  ReviewsAllCommentsBox,
  ReviewsButton,
  ReviewsContainer,
  ReviewsFieldBox,
} from "./styles";
import TitleProductReviews from "titles/titleProductDetailsReviews";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  getProductDetailsCommentaries,
  postProductDetailsCommentaries,
} from "reducers/productDetailsSlice";
import { useParams } from "react-router-dom";

const Reviews = ({ notebook }) => {
  const { t } = useTranslation();
  const [allReviews, setAllReviews] = useState();

  const dispatch = useDispatch();

  const handleCurrentComment = (e) => {
    setAllReviews(e.target.value);
    console.log(e.target.value);
  };

  const handleReviewsSubmit = async (event) => {
    event.preventDefault();
    await dispatch(getProductDetailsCommentaries());
  };

  const handlePostComments = async (id) => {
    await dispatch(postProductDetailsCommentaries(id));
    handleCurrentComment();
  };

  // const handleGetComments = async (id) => {
  //   const comment = await dispatch(getProductDetailsCommentaries(id));
  // };

  useEffect(() => {
    // handleGetComments();
  }, []);

  return (
    <ReviewsContainer>
      <TitleProductReviews />

      <ReviewsFieldBox>
        <form onSubmit={handleReviewsSubmit}>
          <CustomTextareaReviews
            aria-label="reviews"
            minRows={3}
            placeholder={t("textareaLeaveReviewField")}
          />

          <ReviewsButton
            type="submit"
            variant="contained"
            onClick={handlePostComments(notebook.id)}
          >
            {t("submitReview")}
          </ReviewsButton>
        </form>
      </ReviewsFieldBox>

      <ReviewsAllCommentsBox>
        <Box>{allReviews}</Box>
      </ReviewsAllCommentsBox>
    </ReviewsContainer>
  );
};

export default Reviews;
