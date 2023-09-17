import { AccountCircleOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import theme from "theme";

const AccountIconButton = () => {
  return (
    <IconButton>
      <AccountCircleOutlined
        fontSize="large"
        sx={{
          color: theme.palette.colorOrange.main,
        }}
      />
    </IconButton>
  );
};

export default AccountIconButton;
