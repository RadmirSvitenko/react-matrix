import { Box, Button, Grid } from "@mui/material";
import styled from "styled-components";
import theme from "theme";

export const CharacteristicsContainer = styled(Grid)(() => ({
  width: "100%",
  height: "100%",
  display: "flex",
  borderRadius: "30px",
  justifyContent: "center",
  alignItems: "center",
}));

export const CharacteristicsTitle = styled(Box)(() => ({
  fontFamily: theme.fonts.nunito,
  fontSize: "30px",
  marginBottom: "20px",
  letterSpacing: "2px",
  color: "#000",
  fontWeight: "800",
  width: "100%",
  textAlign: "center",
}));

export const CharacteristicsInfoBox = styled(Box)(() => ({
  width: "70%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  flexWrap: "wrap",
  lineHeight: "50px",
  padding: "50px",
  background: "#f5f5f5",
  borderRadius: "25px",
}));

export const CharacteristicsInfo = styled(Box)(() => ({
  fontFamily: theme.fonts.oswald,
  fontSize: "20px",
  letterSpacing: "2px",
  color: "#000",
  display: "flex",
}));

export const CharacteristicsDescriptionTitle = styled(Box)(() => ({
  fontFamily: theme.fonts.valeraRound,
  fontSize: "30px",
  letterSpacing: "2.5px",
  display: "flex",
  width: "100%",
  justifyContent: "center",
  fontWeight: "bold",
  margin: "10px 0px",
  color: theme.palette.colorViolet.main,
}));
