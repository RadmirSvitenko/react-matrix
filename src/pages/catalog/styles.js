import { Cookie } from "@mui/icons-material";
import { Box, Grid, Tab, Tabs } from "@mui/material";
import styled from "styled-components";
import theme from "theme";

export const CatalogContainer = styled(Grid)(() => ({
  width: "100%",
  height: "100vh",
}));

export const CatalogProductList = styled(Grid)(() => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  width: "100%",
  height: "auto",
}));

export const CatalogProductBox = styled(Box)(() => ({
  fontFamily: theme.fonts.oswald,
  letterSpacing: "2px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "270px",
  height: "270px",
  marginBottom: "50px",
  margin: "30px 10px",
  position: "relative",
}));

export const CatalogProductInfo = styled(Box)(() => ({
  background: "rgba(0,0,0,0)",
  position: "absolute",
  height: "270px",
  width: "270px",
  transition: "0.4s",
  color: "#fff",
  zIndex: 2,
  opacity: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  flexDirection: "column",
  borderRadius: "25px",
  "&:hover": {
    background: "rgba(0,0,0,0.5)",
    opacity: 1,
    transition: "0.4s",
    borderRadius: "20px",
    padding: "0px 25px",
  },
}));

export const CatalogProductImage = styled(Box)(() => ({
  backgroundSize: "cover",
  flexDirection: "column",
  display: "flex",
  borderRadius: "20px",
  position: "absolute",
  zIndex: "1",
}));

export const CustomTabsCatalog = styled(Tabs)(({ theme }) => ({
  fontFamily: theme.fonts.blackOpsOne,
}));

export const CustomTabCatalog = styled(Tab)(({ theme }) => ({
  color: theme.palette.colorOrange.main,
  fontFamily: theme.fonts.blackOpsOne,
}));

export const CatalogProductTitle = styled(Box)(() => ({
  fontFamily: theme.fonts.francoisOne,
  letterSpacing: "2px",
  textTransform: "uppercase",
  fontWeight: "bold",
  color: theme.palette.colorWhite.main,
  textAlign: "center",
}));

export const CatalogProductBrand = styled(Box)(() => ({
  fontFamily: theme.fonts.changa,
  letterSpacing: "2px",
  textTransform: "uppercase",
  fontWeight: "bold",
  color: theme.palette.colorNeon.main,
}));

export const CatalogProductPrice = styled(Box)(() => ({
  fontFamily: theme.fonts.oswald,
  letterSpacing: "2px",
  textTransform: "uppercase",
  fontWeight: "bold",
  color: theme.palette.colorLime.main,
}));

export const CatalogProductAbout = styled(Box)(() => ({
  fontFamily: theme.fonts.oswald,
  letterSpacing: "2px",
  textTransform: "uppercase",
  fontWeight: "bold",
  color: "red",
}));
