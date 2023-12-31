import { Box, Button, Paper, TextField, Toolbar } from "@mui/material";
import styled from "styled-components";
import theme from "theme";

export const HeaderContainer = styled(Paper)(({ theme }) => ({
  width: "100%",
  height: "80px",
  top: "0",
  position: "sticky",
  zIndex: "1200",
}));

export const HeaderToolkit = styled(Toolbar)(({ theme }) => ({
  width: "100%",
  height: "80px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: theme.palette.colorViolet.main,
}));

export const HeaderIconsBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
}));

export const HeaderSloganBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  letterSpacing: "3px",
  textTransform: "uppercase",
  fontFamily: theme.fonts.francoisOne,
  fontSize: "28px",
  color: theme.palette.colorWhite.main,
  flexGrow: "1",
  justifyContent: "center",
}));

export const CatalogSearch = styled(TextField)(({ theme }) => ({
  minWidth: "350px",
  display: "flex",

  "& .MuiOutlinedInput-root": {
    color: theme.palette.colorOrange.main,

    "& fieldset": {
      borderColor: theme.palette.colorOrange.main,
      transition: "0.5s",
    },

    "&:hover fieldset": {
      borderColor: theme.palette.colorOrange.main,
      transition: "0.5s",
    },

    "&.Mui-focused fieldset": {
      borderColor: theme.palette.colorOrange.main,
      transition: "0.5s",
    },
    "& .MuiInputLabel-outlined": {
      color: theme.palette.colorWhite.main,
    },
  },
}));
