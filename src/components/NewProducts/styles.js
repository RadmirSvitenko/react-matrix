import { Box, Typography } from "@mui/material";
import { styled } from "styled-components";

export const PresentationNewProductsBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space=around",
  flexDirection: "column",
  width: "100%",
  height: "auto",
}));
export const NewProductContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-around",
  width: "100%",
  height: "auto",
  marginTop: "30px",
  flexWrap: "wrap",
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

export const NewProductBrand = styled(Box)(({ theme }) => ({
  fontFamily: theme.fonts.oswald,
  letterSpacing: "1px",
  fontSize: "18px",
  fontWeight: "bold",
  textTransform: "uppercase",
  color: theme.palette.colorViolet.main,
}));
