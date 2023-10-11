import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  CustomTextareaReviews,
  ReviewsAllCommentsBox,
  ReviewsButton,
  ReviewsCommentBox,
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
  const [valueCurrentComment, setValueCurrentComment] = useState("");
  console.log("valueCurrentComment: ", valueCurrentComment);

  const { t } = useTranslation();

  const comments = useSelector((state) => state.detailsProduct.comments);

  console.log("comments: ", comments);

  const dispatch = useDispatch();

  const handleCurrentComment = (e) => {
    setValueCurrentComment(e.target.value);
    console.log(e.target.value);
  };

  const handleReviewsSubmit = (event) => {
    event.preventDefault();
  };

  const handlePostComments = async (id, comment) => {
    await dispatch(
      postProductDetailsCommentaries({ id: id, comment: comment }),
      handleGetComments(id)
    );
  };

  const handleGetComments = useCallback(
    async (id) => {
      await dispatch(getProductDetailsCommentaries({ id: id }));
    },
    [dispatch]
  );

  // useEffect(() => {
  //   handleGetComments(notebook.id);
  // }, [handleGetComments]);

  return (
    <ReviewsContainer>
      <TitleProductReviews />

      <ReviewsFieldBox>
        <form onSubmit={handleReviewsSubmit}>
          <CustomTextareaReviews
            multiline="textarea"
            rows={6}
            aria-label="reviews"
            minRows={3}
            onChange={handleCurrentComment}
            placeholder={t("textareaLeaveReviewField")}
          />
        </form>

        <ReviewsButton
          type="submit"
          variant="contained"
          onClick={() => handlePostComments(notebook.id, valueCurrentComment)}
        >
          {t("submitReview")}
        </ReviewsButton>
      </ReviewsFieldBox>

      <ReviewsAllCommentsBox>
        {comments.results?.map(({ content }) => (
          <ReviewsCommentBox>
            <p>{content}</p>
          </ReviewsCommentBox>
        ))}
      </ReviewsAllCommentsBox>
    </ReviewsContainer>
  );
};

export default Reviews;
