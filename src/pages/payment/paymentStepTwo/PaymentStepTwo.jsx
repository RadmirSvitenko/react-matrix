import { PaymentElement } from "@stripe/react-stripe-js";
import React from "react";
import { PaymentStepTwoContainer, PaymentStepTwoFieldBox } from "./styles";
import visaCard from "assets/images/payment-visa.webp";
import { PaymentFieldContactInfo } from "../paymentStepOne/styles";
import theme from "theme";
import { useTranslation } from "react-i18next";

const PaymentStepTwo = () => {
  const { t } = useTranslation();
  return (
    <PaymentStepTwoContainer>
      <img src={visaCard} alt="visaCard" />
      <PaymentStepTwoFieldBox>
        <PaymentFieldContactInfo
          required
          type="text"
          variant="outlined"
          label={t("paymentTwoStepName")}
          InputLabelProps={{
            style: { color: theme.palette.colorOrange.main },
          }}
        />

        <PaymentFieldContactInfo
          required
          type="text"
          variant="outlined"
          label={t("paymentTwoStepSurname")}
          InputLabelProps={{
            style: { color: theme.palette.colorOrange.main },
          }}
        />
        <PaymentFieldContactInfo
          required
          type="number"
          variant="outlined"
          label={t("paymentTwoStepAge")}
          InputLabelProps={{
            style: { color: theme.palette.colorOrange.main },
          }}
        />

        <PaymentFieldContactInfo
          required
          type="email"
          variant="outlined"
          label={t("paymentTwoStepEmail")}
          InputLabelProps={{
            style: { color: theme.palette.colorOrange.main },
          }}
        />

        <PaymentFieldContactInfo
          required
          type="number"
          variant="outlined"
          label={t("paymentTwoStepNumberPhone")}
          InputLabelProps={{
            style: { color: theme.palette.colorOrange.main },
          }}
        />
      </PaymentStepTwoFieldBox>
    </PaymentStepTwoContainer>
  );
};

export default PaymentStepTwo;
