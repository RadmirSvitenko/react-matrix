import { Box } from "@mui/material";
import styled from "styled-components";

export const NewProducts = styled(Box)(({ theme }) => ({
  fontFamily: theme.fonts.blackOpsOne,
  letterSpacing: "4px",
  fontSize: "36px",
  color: "#000",
  margin: "50px 0px",
  fontWeight: "700",
  textTransform: "uppercase",
  textAlign: "center",
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
}));

export const TitleHeaderPresentation = styled(Box)(({ theme }) => ({
  fontFamily: theme.fonts.blackOpsOne,
  letterSpacing: "4px",
  fontSize: "26px",
  color: "#fff",
  margin: "50px 0px",
  fontWeight: "700",
  textTransform: "uppercase",
  textAlign: "center",
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
