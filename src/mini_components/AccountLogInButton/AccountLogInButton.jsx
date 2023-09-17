import React, { useState } from "react";
import { AuthDialog, AuthDialogContent, HeaderLogIn } from "./styles";
import { Dialog, DialogContent, Slide } from "@mui/material";
import { Transition } from "@react-spring/web";
import Authentification from "components/Authentification/Authentification";
import { useTranslation } from "react-i18next";
import theme from "theme";

const AccountLogInButton = (props) => {
  const [open, setOpen] = useState(false);

  const { t } = useTranslation();

  const toggleAuth = () => {
    setOpen((open) => !open);
  };

  return (
    <div>
      <HeaderLogIn
        variant="contained"
        onClick={toggleAuth}
        sx={{
          letterSpacing: "2px",
          textTransform: "uppercase",
          fontFamily: theme.fonts.valeraRound,
          fontSize: "14px",
          color: theme.palette.colorWhite.main,
          background: theme.palette.colorOrange.main,
          transition: "0.4s",
          "&:hover": {
            color: "#000",
            background: theme.palette.colorNeon.main,
            transition: "0.4s",
          },
        }}
      >
        {t("buttonAuth")}
      </HeaderLogIn>

      <AuthDialog
        open={open}
        keepMounted
        onClose={toggleAuth}
        TransitionComponent={Slide}
      >
        <AuthDialogContent>
          <Authentification />
        </AuthDialogContent>
      </AuthDialog>
    </div>
  );
};

export default AccountLogInButton;
