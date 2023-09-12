import { Box, CardContent, CardMedia, Grid } from "@mui/material";
import { wrap } from "framer-motion";
import styled from "styled-components";
import theme from "theme";

export const FilterBlocksContainer = styled(Grid)(() => ({
  width: "100%",
  display: "flex",
  background: "#fff9c4",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  flexDirection: "column",
  alignItems: "center",
  margin: "50px 0px",
  paddingBottom: "50px",
}));

export const FilterBox = styled(Grid)(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
}));

export const FilterCardBox = styled(Grid)(() => ({
  width: "350px",
  height: "350px",
  position: "relative",
}));

export const FilterCardMedia = styled(CardMedia)(() => ({
  width: "350px",
  height: "350px",
  flexDirection: "column",
  display: "flex",
  borderRadius: "20px",
  position: "absolute",
  zIndex: "1",
}));

export const FilterCardContent = styled(CardContent)(() => ({
  background: "rgba(0,0,0,0)",
  position: "absolute",
  height: "100%",
  width: "100%",
  transition: "0.4s",
  color: "#fff",
  zIndex: 2,
  opacity: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  "&:hover": {
    background: "rgba(0,0,0,0.5)",
    opacity: 1,
    transition: "0.4s",
    borderRadius: "20px",
    padding: "0px 25px",
  },
}));

export const FilterCardContentTitle = styled(Box)(({ theme }) => ({
  fontFamily: theme.fonts.francoisOne,
  textTransform: "uppercase",
  letterSpacing: "2px",
  color: "#fff",
  fontSize: "20px",
}));
