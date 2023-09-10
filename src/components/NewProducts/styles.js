import { Box, Typography } from "@mui/material";
import { styled } from "styled-components";

export const PresentationNewProductsBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space=around",
  alignItems: "center",
  flexDirection: "column",
  width: "100%",
  height: "750px",
}));
export const NewProductContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-around",
  width: "100%",
  height: "auto",
}));
export const NewProductBox = styled(Box)(({ theme }) => ({
  fontFamily: theme.fonts.oswald,
  letterSpacing: "2px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "250px",
  height: "450px",
  maxHeight: "500px",
  marginBottom: "50px",
  margin: "0px 10px",
}));

export const NewProductImageBox = styled(Box)(() => ({
  maxWidth: "350px",
  maxHeight: "450px",
  width: "350px",
  height: "450px",
}));

export const NewProductTitle = styled(Box)(({ theme }) => ({
  fontFamily: theme.fonts.oswald,
  letterSpacing: "2px",
  fontSize: "20px",
  fontWeight: "700",
  textTransform: "uppercase",
}));

export const NewProductPrice = styled(Box)(({ theme }) => ({
  fontFamily: theme.fonts.oswald,
  letterSpacing: "2px",
  fontSize: "20px",
  fontWeight: "900",
  textTransform: "uppercase",
  color: "limegreen",
}));

export const NewProductRating = styled(Box)(({ theme }) => ({
  fontFamily: theme.fonts.oswald,
  letterSpacing: "2px",
  fontSize: "16px",
  fontWeight: "bold",
  margin: "0px 10px",
}));
