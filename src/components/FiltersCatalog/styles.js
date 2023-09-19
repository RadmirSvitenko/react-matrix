import { Box } from "@mui/material";
import styled from "styled-components";
import theme from "theme";

export const FilterTitle = styled(Box)(() => ({
  fontFamily: theme.fonts.oswald,
  color: "#000",
  letterSpacing: "1px",
  fontWeight: "600",
  fontSize: "18px",
  margin: "10px 0px",
}));

export const FilterVariandBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "column",
}));

export const FilterVariand = styled(Box)(() => ({
  fontFamily: theme.fonts.oswald,
  color: "#000",
  letterSpacing: "1px",
  fontWeight: "500",
  fontSize: "16px",
  textTransform: "uppercase",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
}));
