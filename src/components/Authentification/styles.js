import {
  Box,
  Button,
  Grid,
  Tab,
  Tabs,
  TextField,
  textFieldClasses,
} from "@mui/material";
import styled from "styled-components";

export const AuthentificationContainer = styled(Grid)(({ theme }) => ({
  width: "400px",
  height: "500px",
  outline: theme.palette.colorNeon.main,
  borderRadius: "20px",
}));

export const AuthentificationTabs = styled(Tabs)(({ theme }) => ({
  color: theme.palette.colorOrange.main,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const AuthentificationTab = styled(Tab)(({ theme }) => ({
  color: theme.palette.colorOrange.main,
}));

export const AuthorizationTitle = styled(Box)(({ theme }) => ({
  color: theme.palette.colorOrange.main,
  fontFamily: theme.fonts.valeraRound,
  letterSpacing: "2px",
  fontSize: "20px",
  fontWeight: "bold",
  textTransform: "uppercase",
}));

export const AuthorizationForm = styled("form")(({ theme }) => ({
  width: "100%",
  height: "100%",
  outline: "2px solid",
  outlineColor: theme.palette.colorOrange.main,
  borderRadius: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-evenly",
}));

export const AuthorizationInput = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: theme.palette.colorOrange.main,
      transition: "0.5s",
    },
    "&:hover fieldset": {
      borderColor: theme.palette.colorNeon.main,
      transition: "0.5s",
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.colorWhite.main,
      transition: "0.5s",
    },
    "& .MuiInputLabel-outlined": {
      color: theme.palette.colorWhite.main,
    },
  },
}));

export const RegistrationInput = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: theme.palette.colorOrange.main,
      transition: "0.5s",
    },
    "&:hover fieldset": {
      borderColor: theme.palette.colorNeon.main,
      transition: "0.5s",
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.colorWhite.main,
      transition: "0.5s",
    },
    "& .MuiInputLabel-outlined": {
      color: theme.palette.colorWhite.main,
    },
  },
}));
