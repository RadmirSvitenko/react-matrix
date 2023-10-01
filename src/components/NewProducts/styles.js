import { Box, Typography } from "@mui/material";
import { styled } from "styled-components";
import theme from "theme";

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
  [theme.breakpoints.down("sm")]: {
    marginTop: "0px",
  },

  [theme.breakpoints.down("md")]: {
    marginTop: "0px",
    padding: "0px 100px",
  },

  [theme.breakpoints.down("lg")]: {
    marginTop: "0px",
    padding: "0px 100px",
  },
}));
export const NewProductBox = styled(Box)(() => ({
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
  [theme.breakpoints.down("sm")]: {
    alignItems: "center",
    margin: "10px",
  },

  [theme.breakpoints.down("md")]: {
    marginTop: "0px",
  },

  [theme.breakpoints.down("lg")]: {
    marginTop: "0px",
  },
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
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
    textAlign: "center",
  },
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
