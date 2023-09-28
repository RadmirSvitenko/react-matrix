import { Box, Grid } from "@mui/material";
import styled from "styled-components";
import theme from "theme";

export const CartDetailsProductContainer = styled(Grid)(() => ({
  width: "100%",
  height: "100vh",
}));

export const CartDetailsAllProducts = styled(Grid)(() => ({
  width: "70%",
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  flexWrap: "wrap",
}));

export const CartDetailsCountProducts = styled(Grid)(() => ({
  width: "25%",
  height: "80vh",
  background: "#000",
}));

export const CartDetailsProductBox = styled(Grid)(() => ({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
}));

export const CartDetailsImageBox = styled(Box)(() => ({
  borderRadius: "20px",
  width: "500px",
  height: "500px",
}));

export const CartDetailsInfoBox = styled(Box)(() => ({
  display: "flex",
  width: "auto",
  padding: "0px 20px",
  flexGrow: "1",
  height: "250px",
  flexDirection: "column",
  justifyContent: "space-evenly",
}));

export const CartDetailsFucntionBox = styled(Box)(() => ({
  display: "flex",
  width: "150px",
  height: "250px",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

export const CartDetailsTitle = styled(Box)(() => ({
  fontFamily: theme.fonts.oswald,
  display: "flex",
  fontSize: "20px",
  letterSpacing: "1.5px",
  margin: "10px 0px",
  fontWeight: "600",
}));

export const CartDetailsInfo = styled(Box)(() => ({
  fontFamily: theme.fonts.valeraRound,
  fontSize: "16px",
  fontWeight: "600",
}));

export const CartDetailsFunction = styled(Box)(() => ({
  fontFamily: theme.fonts.valeraRound,
  fontSize: "20px",
  fontWeight: "800",
  display: "flex",
  alignItems: "center",
  background: "#000",
  borderRadius: "20px",
  color: "#fff",
}));

export const CartDetailsActionInfo = styled(Box)(() => ({
  fontFamily: theme.fonts.valeraRound,
  fontSize: "18px",
  fontWeight: "700",
  letterSpacing: "1px",
  margin: "10px",
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

export const CartDetailsSlideBox = styled(Box)(() => ({
  marginBottom: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
