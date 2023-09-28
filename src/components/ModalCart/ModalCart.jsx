import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Slide,
  Typography,
} from "@mui/material";
import { Transition } from "@react-spring/web";
import CartDetails from "pages/cartDetails/CartDetails";
import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  getUserCart,
  postDeleteProdoctModalcart,
  postDeleteProductModalcart,
} from "reducers/cartSlice";
import { API_NOTEBOOKS } from "requester";
import {
  ButtonToPayment,
  ButtonToPaymentBox,
  ModalCustomDialog,
  ModalCustomDialogContent,
  ModalcartActionInfo,
  ModalcartBrand,
  ModalcartCpuName,
  ModalcartFucntionBox,
  ModalcartFunction,
  ModalcartImageBox,
  ModalcartInfo,
  ModalcartInfoBox,
  ModalcartModel,
  ModalcartNumberOfCoresProcessor,
  ModalcartPrice,
  ModalcartProductContainer,
  ModalcartRam,
  ModalcartTitle,
  PaymentBox,
} from "./styles";
import theme from "theme";
import { Add, Delete, DeleteForever, Remove } from "@mui/icons-material";

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { postProductDetails } from "reducers/productDetailsSlice";

const ModalCart = ({ open, onClose }) => {
  const [cart, setCart] = useState([]);

  console.log("cart: ", cart);

  const { t } = useTranslation();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const getDataModalCart = useCallback(async () => {
    const cartData = await dispatch(getUserCart());
    setCart(cartData.payload);
  }, [dispatch]);

  const handleDeleteProductModalcart = async (id, notebook) => {
    await dispatch(
      postDeleteProductModalcart({
        id: id,
        notebook: notebook,
      })
    );
  };

  const handleAddProductModalcart = async (id, notebook) => {
    await dispatch(
      postProductDetails({
        id: id,
        notebook: notebook,
      })
    );
  };

  useEffect(() => {
    getDataModalCart();
  }, [getDataModalCart]);

  return (
    <ModalCustomDialog
      TransitionComponent={Slide}
      keepMounted
      maxWidth={"800px"}
      open={open}
      onClose={onClose}
      sx={{
        zIndex: "3000",
      }}
    >
      <DialogTitle>
        <Grid width={"100%"} display={"flex"} justifyContent={"space-between"}>
          <Box>{t("modalcartTitle")}</Box>
          <Button
            onClick={() => navigate("/cart")}
            disabled={cart.length < 1 ? true : false}
            variant="outlined"
          >
            {t("modalcartButtonDetails")}
          </Button>
        </Grid>
      </DialogTitle>
      <ModalCustomDialogContent>
        {cart.map(({ notebook, quantity }) => (
          <ModalcartProductContainer>
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
                  fontSize: "26px",
                }}
              >
                ${notebook.price * quantity}
              </ModalcartInfo>
            </ModalcartInfoBox>

            <ModalcartFucntionBox>
              <ModalcartFunction>
                <IconButton
                  onClick={() =>
                    handleAddProductModalcart(notebook.id, notebook)
                  }
                >
                  <Add
                    sx={{
                      color: "#fff",
                    }}
                  />
                </IconButton>
                {quantity}
                <IconButton
                  onClick={() =>
                    handleDeleteProductModalcart(notebook.id, notebook)
                  }
                >
                  <Remove
                    sx={{
                      color: "#fff",
                    }}
                  />
                </IconButton>
              </ModalcartFunction>
            </ModalcartFucntionBox>
          </ModalcartProductContainer>
        ))}
      </ModalCustomDialogContent>
      <DialogActions>
        <PaymentBox>
          <Button
            onClick={() => navigate("/payment")}
            disabled={cart.length < 1 ? true : false}
            variant="outlined"
          >
            {t("modalcartButtonPayment")}
          </Button>
        </PaymentBox>

        <Grid display={"flex"} flexDirection={"column"}>
          <ModalcartActionInfo>
            {t("modalcartTotalQuantity")}:{" "}
            {cart.reduce((acc, { quantity }) => acc + quantity, 0)}
          </ModalcartActionInfo>

          <ModalcartActionInfo>
            {t("modalcartTotalPrice")}: $
            {cart.reduce(
              (acc, { notebook, quantity }) => acc + notebook.price * quantity,
              0
            )}
          </ModalcartActionInfo>
        </Grid>
      </DialogActions>
    </ModalCustomDialog>
  );
};

export default ModalCart;
