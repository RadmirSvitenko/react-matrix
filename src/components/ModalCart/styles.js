import { Dialog, DialogContent } from "@mui/material";
import styled from "styled-components";

export const ModalCustomDialog = styled(Dialog)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const ModalCustomDialogContent = styled(DialogContent)(() => ({
  display: "flex",
  width: "600px",
  height: "600px",
  justifyContent: "center",
  alignItems: "center",
  background: "#232323",
}));
