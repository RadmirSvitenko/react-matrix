import { Box, Button, Grid, TextField } from "@mui/material";
import styled from "styled-components";
import theme from "theme";

export const PaymentStepOneContainer = styled(Box)(() => ({
  margin: "50px 0px",
  width: "100%",
  height: "100%",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

export const PaymentStepOneFieldBox = styled("Box")(() => ({
  width: "40%",
  height: "100%",
  display: "flex",
  padding: "0px 50px",
  flexDirection: "column",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  alignItems: "center",
  outline: "3px solid orange",
  borderRadius: "30px",
  background: "#151515",
  [theme.breakpoints.down("md")]: {
    width: "80%",
    margin: "20px 0px",
  },
}));

export const PaymentStepOneCartBox = styled(Box)(() => ({
  width: "40%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  flexWrap: "wrap",
  justifyContent: "center",
  outline: "3px solid orange",
  borderRadius: "30px",
  [theme.breakpoints.down("md")]: {
    width: "80%",
    margin: "20px 0px",
  },
}));

export const PaymentStepOneCartTitle = styled(Box)(() => ({
  fontSize: "30px",
  fontWeight: "bold",
  fontFamily: theme.fonts.valeraRound,
  display: "flex",
  width: "100%",
  justifyContent: "center",
  textTransform: "uppercase",
}));

export const PaymentFieldContactInfo = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    color: theme.palette.colorOrange.main,
    letterSpacing: "3px",
    fontWeight: "bold",

    "& fieldset": {
      borderColor: theme.palette.colorOrange.main,
      transition: "0.5s",
    },
    "&:hover fieldset": {
      borderColor: "#fff",
      transition: "0.5s",
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.colorOrange.main,
      transition: "0.5s",
    },
    "& .MuiInputLabel-outlined": {
      color: theme.palette.colorWhite.main,
    },
  },
}));
