import { Button, Grid, TextareaAutosize } from "@mui/material";
import styled from "styled-components";
import theme from "theme";

export const CustomTextareaReviews = styled(TextareaAutosize)(() => ({
  width: "320px",
  maxWidth: "500px",
  fontFamily: theme.fonts.valeraRound,
  fontSize: "18px",
  fontWeight: "500",
  lineHeight: "1.5",
  padding: "20px",
  borderRadius: "20px",
  color: "#fff",
  background: "#232323",
  outline: "2px solid theme.palette.colorViolet.main ",
  boxShadow: "0px 2px 24px theme.palette.colorViolet",

  "&:focus": {
    outline: "5px solid #fff",
    borderColor: "#fff",
  },

  "&:focus-visible": {
    outline: "0",
  },
}));

export const ReviewsContainer = styled(Grid)(() => ({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "flex-start",
  flexDirection: "column",
  alignItems: "center",
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
