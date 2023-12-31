import { Box, Button, TextField } from "@mui/material";
import styled from "styled-components";
import theme from "theme";

export const AuthorizationTitle = styled(Box)(({ theme }) => ({
  color: theme.palette.colorOrange.main,
  fontFamily: theme.fonts.valeraRound,
  letterSpacing: "2px",
  fontSize: "20px",
  fontWeight: "bold",
  textTransform: "uppercase",
}));

export const AuthorizationForm = styled("form")(({ theme }) => ({
  width: "400px",
  height: "400px",
  outline: "2px solid",
  outlineColor: theme.palette.colorOrange.main,
  borderRadius: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-evenly",
  [theme.breakpoints.down("sm")]: {
    width: "280px",
    height: "280px",
  },
}));

export const AuthorizationInput = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    color: theme.palette.colorOrange.main,
    // fontWeight: "600",
    // letterSpacing: "2px",

    "& fieldset": {
      borderColor: theme.palette.colorOrange.main,
      transition: "0.5s",
    },
    "&:hover fieldset": {
      borderColor: "#fff",
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

export const AuthButton = styled(Button)(() => ({
  backgroundColor: theme.palette.colorOrange.main,
  transition: "0.5s",
  "&:hover": {
    backgroundColor: theme.palette.colorNeon.main,
    transition: "0.5s",
  },
}));
