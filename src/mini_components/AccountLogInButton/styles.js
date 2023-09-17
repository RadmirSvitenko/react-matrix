import { Button, Dialog, DialogContent } from "@mui/material";
import styled from "styled-components";
import theme from "theme";

export const HeaderLogIn = styled(Button)(() => ({
  letterSpacing: "2px",
  textTransform: "uppercase",
  fontFamily: theme.fonts.valeraRound,
  fontSize: "14px",
  color: theme.palette.colorWhite.main,
  background: theme.palette.colorOrange.main,
}));

export const AuthDialog = styled(Dialog)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const AuthDialogContent = styled(DialogContent)(() => ({
  display: "flex",
  width: "600px",
  height: "600px",
  justifyContent: "center",
  alignItems: "center",
  background: "#232323",
}));
