import { Box, Typography } from "@mui/material";
import { styled } from "styled-components";

export const PresentationTopSalesBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space=around",
  flexDirection: "column",
  width: "100%",
  height: "auto",
}));
export const TopSalesContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-around",
  width: "100%",
  height: "auto",
  marginTop: "30px",
}));
export const TopSalesBox = styled(Box)(({ theme }) => ({
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

export const TopSalesImageBox = styled(Box)(() => ({
  maxWidth: "350px",
  maxHeight: "450px",
  width: "350px",
  height: "450px",
}));

export const TopSalesTitle = styled(Box)(({ theme }) => ({
  fontFamily: theme.fonts.oswald,
  letterSpacing: "2px",
  fontSize: "20px",
  fontWeight: "700",
  textTransform: "uppercase",
}));

export const TopSalesPrice = styled(Box)(({ theme }) => ({
  fontFamily: theme.fonts.oswald,
  letterSpacing: "2px",
  fontSize: "20px",
  fontWeight: "900",
  textTransform: "uppercase",
  color: "limegreen",
}));

export const TopSalesBrand = styled(Box)(({ theme }) => ({
  fontFamily: theme.fonts.oswald,
  letterSpacing: "1px",
  fontSize: "18px",
  fontWeight: "bold",
  textTransform: "uppercase",
  color: theme.palette.colorViolet.main,
}));
