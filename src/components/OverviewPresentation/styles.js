import { Grid } from "@mui/material";
import { wrap } from "framer-motion";
import styled from "styled-components";

export const OverviewContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  padding: "50px 0px",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "40px",
  background: theme.palette.colorDark.main,
  flexWrap: "wrap",
}));
