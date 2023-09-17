import { Grid, Tab, Tabs } from "@mui/material";
import styled from "styled-components";
import theme from "theme";

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
  ".MuiTabs-root": {
    "& .MuiTabs-indicator": {
      color: theme.palette.colorOrange.main,
    },
  },
}));

export const AuthentificationTab = styled(Tab)(({ theme }) => ({
  color: theme.palette.colorOrange.main,
}));
