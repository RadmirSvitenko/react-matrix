import { Grid } from "@mui/material";
import styled from "styled-components";
import theme from "theme";

export const PaymentStepTwoContainer = styled(Grid)(() => ({
  margin: "50px 0px",
  width: "100%",
  height: "auto",
  minHeight: "100%",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    margin: "0px",
  },
}));

export const PaymentStepTwoFieldBox = styled(Grid)(() => ({
  width: "400px",
  height: "100%",
  display: "flex",
  padding: "50px",
  flexDirection: "column",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  alignItems: "center",
  outline: "3px solid orange",
  borderRadius: "30px",
  background: "#151515",
  [theme.breakpoints.down("lg")]: {
    marginBottom: "50px",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "20px",
  },
}));
