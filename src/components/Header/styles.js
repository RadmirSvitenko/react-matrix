import { Paper, Toolbar } from "@mui/material";
import styled from "styled-components";
import theme from "theme";

export const HeaderContainer = styled(Paper)(({ theme }) => ({
  width: "100%",
  height: "80px",
  position: "sticky",
  top: "0",
}));

export const HeaderToolkit = styled(Toolbar)(({ theme }) => ({
  width: "100%",
  height: "80px",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  background: theme.palette.colorOrange.main,
}));
