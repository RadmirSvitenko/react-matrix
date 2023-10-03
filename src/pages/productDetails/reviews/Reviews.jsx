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
import { useDispatch, useSelector } from "react-redux";
import {
  getProductDetailsCommentaries,
  postProductDetailsCommentaries,
} from "reducers/productDetailsSlice";
import { useParams } from "react-router-dom";

const Reviews = ({ notebook }) => {
  const [testComment, setTestComment] = useState("this is test comment");

  const { t } = useTranslation();
  const [allReviews, setAllReviews] = useState();

  const comments = useSelector((state) => state.detailsProduct.comments);
  console.log("comments: ", comments);

  const dispatch = useDispatch();

  // const handleCurrentComment = (e) => {
  //   setAllReviews(e.target.value);
  //   console.log(e.target.value);
  // };

  const handleReviewsSubmit = async (event) => {
    event.preventDefault();
    await dispatch(getProductDetailsCommentaries());
  };

  const handlePostComments = async (id, test) => {
    await dispatch(postProductDetailsCommentaries({ id: id, test: test }));
    // handleCurrentComment();
  };

  const handleGetComments = async (id) => {
    await dispatch(getProductDetailsCommentaries({ id: id }));
  };

  useEffect(() => {
    handleGetComments();
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
            onClick={() => handlePostComments(notebook.id, testComment)}
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
