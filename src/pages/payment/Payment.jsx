import {
  Box,
  Button,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import HeaderCatalog from "components/HeaderCatalog/HeaderCatalog";
import React, { useState } from "react";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import {
  CustomStepButton,
  CustomStepper,
  PaymentContainer,
  StepperContainer,
  StepperTypography,
} from "./styles";
import PaymentStepOne from "./paymentStepOne/PaymentStepOne";
import PaymentStepTwo from "./paymentStepTwo/PaymentStepTwo";
import PaymentStepThree from "./paymentStepThree/PaymentStepThree";
import theme from "theme";

const Payment = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  const { t } = useTranslation();

  const steps = [
    <StepperTypography>{t("paymentStepOneTitle")}</StepperTypography>,
    <StepperTypography>{t("paymentStepTwoTitle")}</StepperTypography>,
    <StepperTypography>{t("paymentStepThreeTitle")}</StepperTypography>,
  ];

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <PaymentContainer>
      <HeaderCatalog />

      <StepperContainer>
        <Stepper
          activeStep={activeStep}
          sx={{
            [theme.breakpoints.down("sm")]: {
              display: "none",
            },
          }}
        >
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>

        {activeStep === steps.length ? (
          <Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button
                sx={{
                  mr: 1,
                  color: theme.palette.colorViolet.main,
                  fontWeight: "700",
                  fontSize: "700",
                  letterSpacing: "1px",
                }}
                onClick={handleReset}
              >
                {t("paymentButtonReset")}
              </Button>
            </Box>
          </Fragment>
        ) : (
          <Fragment>
            {activeStep === 0 ? (
              <PaymentStepOne />
            ) : activeStep === 1 ? (
              <PaymentStepTwo />
            ) : activeStep === 2 ? (
              <PaymentStepThree />
            ) : (
              false
            )}
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{
                  mr: 1,
                  color: theme.palette.colorViolet.main,
                  fontWeight: "700",
                  fontSize: "700",
                  letterSpacing: "1px",
                }}
              >
                {t("paymentButtonBack")}
              </Button>

              <Box sx={{ flex: "1 1 auto" }} />

              <Button
                onClick={handleNext}
                sx={{
                  mr: 1,
                  color: theme.palette.colorViolet.main,
                  fontWeight: "700",
                  fontSize: "700",
                  letterSpacing: "1px",
                }}
              >
                {activeStep === steps.length - 1
                  ? t("paymentButtonFinish")
                  : t("paymentButtonNext")}
              </Button>
            </Box>
          </Fragment>
        )}
      </StepperContainer>
    </PaymentContainer>
  );
};

export default Payment;
