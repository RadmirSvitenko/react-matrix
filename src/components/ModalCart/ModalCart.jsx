import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Slide,
  Typography,
} from "@mui/material";
import { Transition } from "@react-spring/web";
import CartDetails from "pages/cartDetails/CartDetails";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getUserCart } from "reducers/cartSlice";
import { API_NOTEBOOKS } from "requester";

const ModalCart = ({ open, onClose }) => {
  const [cart, setCart] = useState([]);
  console.log("cart: ", cart);

  const { t } = useTranslation();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  // const cart = useSelector((state) => state.cartSlice.userCart);

  const getDataModalCart = async () => {
    const cartData = await dispatch(getUserCart());
    setCart(cartData.payload);
  };

  useEffect(() => {
    getDataModalCart();
  }, []);

  return (
    <Dialog
      TransitionComponent={Slide}
      keepMounted
      open={open}
      onClose={onClose}
      sx={{
        zIndex: "3000",
      }}
    >
      <DialogTitle>
        <Grid width={"100%"} display={"flex"} justifyContent={"space-between"}>
          <Box>Cart</Box>
          <Button onClick={() => navigate("/cart")} variant="text">
            Details
          </Button>
        </Grid>
      </DialogTitle>
      <DialogContent
        sx={{
          width: "500px",
          height: "500px",
        }}
      >
        {cart.map(({ notebook }) => (
          <h1>{notebook.title}</h1>
        ))}
      </DialogContent>
      <DialogActions>
        <Typography>Count: 0</Typography>
      </DialogActions>
    </Dialog>
  );
};

export default ModalCart;
