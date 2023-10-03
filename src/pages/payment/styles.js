import { Box, Button, Grid, Step, Stepper } from "@mui/material";
import styled from "styled-components";
import theme from "theme";

export const PaymentContainer = styled(Grid)(() => ({
  width: "100%",
  height: "100vh",
}));

export const StepperContainer = styled(Grid)(() => ({
  width: "100%",
  height: "100%",
  padding: "50px",
}));

export const StepperTypography = styled(Box)(() => ({
  fontFamily: theme.fonts.valeraRound,
  fontSize: "18px",
  fontWeight: "600",
  color: theme.palette.colorViolet.main,
}));

export const CustomStepper = styled(Step)(() => ({
  fontSize: "18px",
  color: theme.palette.colorOrange.main,
}));
