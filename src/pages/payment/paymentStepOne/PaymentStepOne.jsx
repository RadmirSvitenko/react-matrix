import React from "react";
import {
  PaymentFieldContactInfo,
  PaymentStepOneCartBox,
  PaymentStepOneCartTitle,
  PaymentStepOneContainer,
  PaymentStepOneFieldBox,
} from "./styles";
import { useTranslation } from "react-i18next";
import theme from "theme";
import ModalCart from "components/ModalCart/ModalCart";
import { useSelector } from "react-redux";
import { Box, IconButton, List, ListItem, Typography } from "@mui/material";
import {
  ModalcartImageBox,
  ModalcartInfo,
  ModalcartInfoBox,
  ModalcartProductContainer,
  ModalcartTitle,
} from "components/ModalCart/styles";
import LoadingPage from "mini_components/LoadingPage/LoadingPage";

const PaymentStepOne = () => {
  const userCart = useSelector((state) => state.cartSlice.userCart);
  const isLoadingPage = useSelector((state) => state.cartSlice.isLoadingPage);

  const { t } = useTranslation();

  if (isLoadingPage) {
    return <LoadingPage />;
  }

  return (
    <PaymentStepOneContainer>
      <PaymentStepOneFieldBox>
        <PaymentFieldContactInfo
          margin="dense"
          required
          type="text"
          variant="outlined"
          label={t("paymentOneStepName")}
          InputLabelProps={{
            style: { color: theme.palette.colorOrange.main },
          }}
        />

        <PaymentFieldContactInfo
          margin="dense"
          required
          type="text"
          variant="outlined"
          label={t("paymentOneStepSurname")}
          InputLabelProps={{
            style: { color: theme.palette.colorOrange.main },
          }}
        />
        <PaymentFieldContactInfo
          margin="dense"
          required
          type="number"
          variant="outlined"
          label={t("paymentOneStepAge")}
          InputLabelProps={{
            style: { color: theme.palette.colorOrange.main },
          }}
        />

        <PaymentFieldContactInfo
          margin="dense"
          required
          type="email"
          variant="outlined"
          label={t("paymentOneStepEmail")}
          InputLabelProps={{
            style: { color: theme.palette.colorOrange.main },
          }}
        />

        <PaymentFieldContactInfo
          margin="dense"
          required
          type="number"
          variant="outlined"
          label={t("paymentOneStepNumberPhone")}
          InputLabelProps={{
            style: { color: theme.palette.colorOrange.main },
          }}
        />
      </PaymentStepOneFieldBox>

      <PaymentStepOneCartBox>
        <PaymentStepOneCartTitle>Выбранные товары</PaymentStepOneCartTitle>
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
            position: "relative",
            overflow: "auto",
            maxHeight: 300,
            "& ul": { padding: 0 },
          }}
        >
          {userCart.map(({ notebook, quantity }) => (
            <Box>
              <ModalcartImageBox>
                <img
                  width={"250px"}
                  height={"250px"}
                  src={notebook.images[0]}
                  alt={notebook.title}
                />
              </ModalcartImageBox>
              <ModalcartInfoBox>
                <ModalcartTitle>{notebook.title}</ModalcartTitle>
                <ModalcartInfo>
                  {t("productDetailsBrand")}: {notebook.brand}
                </ModalcartInfo>
                <ModalcartInfo>
                  {t("productDetailsModel")}: {notebook.model}
                </ModalcartInfo>
                <ModalcartInfo>
                  {t("productDetailsCPUName")}: {notebook.cpuName}
                </ModalcartInfo>
                <ModalcartInfo>
                  {t("productDetailsNumberOfCoresProcessor")}:{" "}
                  {notebook.numberOfCoresProcessor}
                </ModalcartInfo>
                <ModalcartInfo>
                  {t("productDetailsRAM")}: {notebook.ram}
                </ModalcartInfo>
                <ModalcartInfo
                  sx={{
                    color: theme.palette.colorViolet.main,
                  }}
                >
                  {t("modalcartOneProductPrice")}: ${notebook.price}
                </ModalcartInfo>

                <ModalcartInfo
                  sx={{
                    color: theme.palette.colorViolet.main,
                  }}
                >
                  {t("modalcartByQuantityProductPrice")}: $
                  {notebook.price * quantity}
                </ModalcartInfo>
              </ModalcartInfoBox>
            </Box>
          ))}
        </List>
      </PaymentStepOneCartBox>
    </PaymentStepOneContainer>
  );
};

export default PaymentStepOne;
