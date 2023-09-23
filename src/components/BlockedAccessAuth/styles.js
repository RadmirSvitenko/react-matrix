import { Grid } from "@mui/material";
import styled from "styled-components";
import accesAuthBG from "assets/images/access-auth-bg.jpg";

export const BlockedAccessAuthContainer = styled(Grid)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100vh",
  backgroundImage: `url(${accesAuthBG})`,
  backgroundSize: "100% 100vh",
}));
