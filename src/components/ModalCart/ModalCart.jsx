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
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

const ModalCart = ({ open, onClose }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const { t } = useTranslation();

  const navigate = useNavigate();

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleModalDialog = () => {
    setOpenDialog((openDialog = !openDialog));
  };

  return (
    <Dialog
      TransitionComponent={Slide}
      keepMounted
      open={open}
      onClose={onClose}
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
      ></DialogContent>
      <DialogActions>
        <Typography>Count: 0</Typography>
      </DialogActions>
    </Dialog>
  );
};

export default ModalCart;
