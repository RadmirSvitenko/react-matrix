import { Box, Dialog, DialogContent, Grid } from "@mui/material";
import styled from "styled-components";
import theme from "theme";

export const ModalCustomDialog = styled(Dialog)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const ModalCustomDialogContent = styled(DialogContent)(() => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  width: "100%",
}));

export const ModalcartProductContainer = styled(Grid)(() => ({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  width: "100%",
  margin: "20px 0px",
  borderRadius: "20px",
  backgroundColor: "rgba(0, 0, 0, 0.05)",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    flexWrap: "wrap",
  },

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    flexWrap: "wrap",
  },
}));

export const ModalcartImageBox = styled(Box)(() => ({
  borderRadius: "20px",
  width: "250px",
  height: "250px",
  display: "flex",
  position: "relative",
  padding: "0px",
  margin: "0px",
}));

export const ModalcartInfoBox = styled(Box)(() => ({
  display: "flex",
  width: "auto",
  padding: "0px 20px",
  flexGrow: "1",
  height: "250px",
  flexDirection: "column",
  justifyContent: "space-evenly",
  [theme.breakpoints.down("md")]: {
    height: "auto",
  },

  [theme.breakpoints.down("sm")]: {
    height: "auto",
    flexWrap: "wrap",
  },
}));

export const ModalcartFucntionBox = styled(Box)(() => ({
  display: "flex",
  width: "150px",
  height: "250px",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
  [theme.breakpoints.down("md")]: {
    height: "150px",
  },

  [theme.breakpoints.down("sm")]: {
    height: "150px",
  },
}));

export const ModalcartTitle = styled(Box)(() => ({
  fontFamily: theme.fonts.oswald,
  display: "flex",
  fontSize: "20px",
  letterSpacing: "1.5px",
  margin: "10px 0px",
  fontWeight: "600",
}));

export const ModalcartInfo = styled(Box)(() => ({
  fontFamily: theme.fonts.valeraRound,
  fontSize: "16px",
  fontWeight: "600",
  [theme.breakpoints.down("md")]: {
    fontSize: "20px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
}));

export const ModalcartFunction = styled(Box)(() => ({
  fontFamily: theme.fonts.valeraRound,
  fontSize: "20px",
  fontWeight: "800",
  display: "flex",
  alignItems: "center",
  background: "#000",
  borderRadius: "20px",
  color: "#fff",
  [theme.breakpoints.down("md")]: {
    fontSize: "26px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "26px",
  },
}));

export const ModalcartActionInfo = styled(Box)(() => ({
  fontFamily: theme.fonts.valeraRound,
  fontSize: "18px",
  fontWeight: "700",
  letterSpacing: "1px",
  margin: "10px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
    alignItems: "center",
    marginLeft: "30px",
  },
}));

export const PaymentBox = styled(Box)(() => ({
  fontFamily: theme.fonts.valeraRound,
  fontSize: "18px",
  fontWeight: "700",
  letterSpacing: "1px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexGrow: "1",
}));

export const ModalCustomDialogAction = styled(Box)(() => ({
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    flexWrap: "wrap",
  },
}));
