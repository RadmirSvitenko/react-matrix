import { Box, Button, Grid, TextField, TextareaAutosize } from "@mui/material";
import styled from "styled-components";
import theme from "theme";

export const CustomTextareaReviews = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    color: "#fff",
  },
  width: "500px",
  height: "auto",
  fontFamily: theme.fonts.valeraRound,
  fontSize: "18px",
  fontWeight: "500",
  lineHeight: "1.5",
  padding: "20px",
  borderRadius: "20px",
  color: "#fff",
  background: "#232323",
  outline: "2px solid theme.palette.colorViolet.main",
  boxShadow: "0px 2px 24px theme.palette.colorViolet",

  "&:focus": {
    outline: "5px solid #fff",
    borderColor: "#fff",
  },

  "&:focus-visible": {
    outline: "0",
  },

  [theme.breakpoints.down("sm")]: {
    width: "300px",
  },
}));

export const ReviewsContainer = styled(Grid)(() => ({
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}));

export const ReviewsFieldBox = styled(Grid)(() => ({
  width: "100%",
  height: "300px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {
    width: "300px",
    margin: "0px",
  },
}));

export const ReviewsButton = styled(Button)(() => ({
  backgroundColor: theme.palette.colorViolet.main,
  transition: "0.4s",
  margin: "50px 0px",

  ":hover": {
    transition: "0.4s",
    background: theme.palette.colorOrange.main,
  },
}));

export const ReviewsAllCommentsBox = styled(Grid)(() => ({
  width: "500px",
  height: "auto",
  maxWidth: "500px",
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "column",
  padding: "20px",
  justifyContent: "space-evenly",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    width: "300px",
    padding: "0px",
  },
}));

export const ReviewsCommentBox = styled(Box)(() => ({
  width: "280px",
  height: "auto",
  minHeight: "200px",
  maxWidth: "300px",
  display: "flex",
  flexWrap: "wrap",
  padding: "20px",
  outline: "1px solid #000",
  margin: "30px 0px",
  borderRadius: "20px",
  overflowX: "hidden",
}));
