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
  [theme.breakpoints.down("md")]: {
    width: "100px",
  },

  [theme.breakpoints.down("lg")]: {
    width: "100px",
  },
}));

export const AuthDialog = styled(Dialog)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const AuthDialogContent = styled(DialogContent)(() => ({
  display: "flex",
  width: "600px",
  height: "auto",
  justifyContent: "center",
  alignItems: "center",
  background: "#232323",
}));
