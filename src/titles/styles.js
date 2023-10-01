import { Box } from "@mui/material";
import styled from "styled-components";
import theme from "theme";

export const NewProducts = styled(Box)(() => ({
  fontFamily: theme.fonts.blackOpsOne,
  letterSpacing: "4px",
  fontSize: "36px",
  color: "#000",
  margin: "50px 0px",
  fontWeight: "700",
  textTransform: "uppercase",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: "26px",
    margin: "30px 0px",
  },
}));

export const TopSales = styled(Box)(({ theme }) => ({
  fontFamily: theme.fonts.blackOpsOne,
  letterSpacing: "4px",
  fontSize: "36px",
  color: "#000",
  margin: "50px 0px",
  fontWeight: "700",
  textTransform: "uppercase",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: "26px",
    margin: "30px 0px",
  },
}));

export const TitleHeaderPresentation = styled(Box)(() => ({
  fontFamily: theme.fonts.blackOpsOne,
  letterSpacing: "4px",
  fontSize: "26px",
  color: "#fff",
  margin: "50px 0px",
  fontWeight: "700",
  textTransform: "uppercase",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },

  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
  },
}));

export const TitleOurOffers = styled(Box)(({ theme }) => ({
  fontFamily: theme.fonts.blackOpsOne,
  width: "100%",
  letterSpacing: "4px",
  fontSize: "36px",
  color: "#000",
  margin: "30px 0px",
  fontWeight: "700",
  textTransform: "uppercase",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: "26px",
    margin: "30px 0px",
  },
}));

export const TitleInterestingReviews = styled(Box)(({ theme }) => ({
  fontFamily: theme.fonts.blackOpsOne,
  letterSpacing: "4px",
  width: "100%",
  fontSize: "36px",
  color: theme.palette.colorOrange.main,
  margin: "20px 0px",
  fontWeight: "700",
  textTransform: "uppercase",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: "26px",
    margin: "30px 0px",
  },
}));

export const TitleCatalog = styled(Box)(({ theme }) => ({
  fontFamily: theme.fonts.blackOpsOne,
  letterSpacing: "4px",
  width: "100%",
  fontSize: "36px",
  color: theme.palette.colorViolet.main,
  margin: "20px 0px",
  fontWeight: "700",
  textTransform: "uppercase",
  textAlign: "center",
}));

export const TitleReviews = styled(Box)(({ theme }) => ({
  fontFamily: theme.fonts.blackOpsOne,
  letterSpacing: "4px",
  width: "100%",
  fontSize: "36px",
  color: theme.palette.colorViolet.main,
  margin: "30px 0px",
  fontWeight: "700",
  textTransform: "uppercase",
  textAlign: "center",
}));
