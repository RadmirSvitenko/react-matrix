import React, { useState } from "react";
import { HeaderContainer, HeaderToolkit } from "./styles";
import { IconButton, MenuItem, Select, Typography } from "@mui/material";
import { AccountCircleOutlined } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [language, setLanguage] = useState("en");

  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (event) => {
    setLanguage(event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  return (
    <HeaderContainer>
      <HeaderToolkit>
        <Typography>LOGO</Typography>
        <Typography>{t("matrixTitle")}""</Typography>
        <Typography>Text2</Typography>
        <Typography>Text3</Typography>
        <IconButton>
          <AccountCircleOutlined />
        </IconButton>
        <Select
          defaultValue="en"
          margin="none"
          variant="standard"
          select
          value={language}
          onChange={handleChangeLanguage}
        >
          <MenuItem value={"en"}>EN</MenuItem>
          <MenuItem value={"ru"}>RU</MenuItem>
        </Select>
      </HeaderToolkit>
    </HeaderContainer>
  );
};

export default Header;
