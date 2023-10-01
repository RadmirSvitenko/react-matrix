import { Box, Button, Grid, Tab, Tabs } from "@mui/material";
import styled from "styled-components";
import theme from "theme";

export const ProductDetailsContainer = styled(Grid)(() => ({
  width: "100%",
  height: "100vh",
}));

export const CustomTabsProductDetails = styled(Tabs)(() => ({
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "column",
}));
