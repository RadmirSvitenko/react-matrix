import { Translate } from "@mui/icons-material";
import { Box, Button, Grid } from "@mui/material";
import styled from "styled-components";
import theme from "theme";

export const AboutProductContainer = styled(Grid)(() => ({
  width: "100%",
  height: "100%",
  display: "flex",
  background: "#f5f5f5",
  borderRadius: "30px",
  [theme.breakpoints.down("lg")]: {
    flexWrap: "wrap",
  },
}));

export const AboutProductTitle = styled(Box)(() => ({
  fontFamily: theme.fonts.nunito,
  fontSize: "30px",
  marginBottom: "20px",
  letterSpacing: "2px",
  color: "#000",
  fontWeight: "800",
  width: "100%",
  textAlign: "center",
  [theme.breakpoints.down("lg")]: {
    fontSize: "20px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
    fontWeight: "800",
  },
}));

export const AboutProductInfo = styled(Box)(() => ({
  fontFamily: theme.fonts.oswald,
  fontSize: "20px",
  letterSpacing: "2px",
  color: "#000",
  display: "flex",
  [theme.breakpoints.down("lg")]: {
    fontSize: "18px",
  },

  [theme.breakpoints.down("md")]: {
    flexWrap: "wrap",
    fontSize: "16px",
    fontWeight: "bold",
  },

  [theme.breakpoints.down("sm")]: {
    flexWrap: "wrap",
    fontSize: "12px",
    fontWeight: "bold",
  },
}));

export const AboutProductSliderBox = styled(Grid)(() => ({
  width: "50%",
  height: "100%",
  display: "flex",
  position: "relative",
  padding: "0px",
  margin: "0px",
  [theme.breakpoints.down("lg")]: {
    justifyContent: "center",
    alignItems: "center",
    position: "static",
    width: "100%",
  },
}));

export const AboutProductInfoBox = styled(Box)(() => ({
  width: "50%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  lineHeight: "40px",
  padding: "50px 0px",
  [theme.breakpoints.down("lg")]: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export const AddToCart = styled(Button)(() => ({
  margin: "20px 0px",
  backgroundColor: theme.palette.colorViolet.main,
  color: "#fff",
  transition: "0.5s",
  [theme.breakpoints.down("sm")]: {
    fontSize: "10px",
    width: "100px",
    height: "50px",
  },
}));
