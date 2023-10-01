import { Box, Grid, Tab, Tabs } from "@mui/material";
import styled from "styled-components";
import theme from "theme";

export const CatalogContainer = styled(Grid)(() => ({
  width: "100%",
}));

export const CatalogProductList = styled(Grid)(() => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  width: "100%",
  height: "auto",
}));

export const CatalogProductContainer = styled(Grid)(() => ({
  display: "flex",
  width: "100%",
  height: "100vh",
  flexWrap: "nowrap",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    flexWrap: "wrap",
  },
}));

export const CatalogProductBox = styled(Box)(() => ({
  fontFamily: theme.fonts.oswald,
  letterSpacing: "2px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "250px",
  margin: "30px 10px",
}));

export const CatalogProductInfo = styled(Box)(() => ({
  height: "auto",
  minHeight: "200px",
  transition: "0.4s",
  display: "flex",
  justifyContent: "space-evenly",
  flexDirection: "column",
  padding: "0",
  background: "#fff",
  ":hover": {
    boxShadow: "-1px 2px 10px 15px rgba(34, 60, 80, 0.3)",
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
  letterSpacing: "3px",
  textTransform: "uppercase",
  fontWeight: "bold",
  fontSize: "20px",
  color: theme.palette.colorViolet.main,
  textAlign: "center",
}));

export const CatalogProductBrand = styled(Box)(() => ({
  fontFamily: theme.fonts.changa,
  letterSpacing: "2px",
  textTransform: "uppercase",
  fontWeight: "bold",
  color: "#000",
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
  color: theme.palette.colorViolet.main,
  alignItems: "flex-end",
  cursor: "pointer",
}));

export const CatalogProductStock = styled(Box)(() => ({
  fontFamily: theme.fonts.oswald,
  letterSpacing: "2px",
  textTransform: "uppercase",
  fontWeight: "bold",
  color: "#000",
}));

export const CatalogPaginationContainer = styled(Grid)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  padding: "50px 0px",
}));
