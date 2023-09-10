import React, { useState } from "react";
import {
  HeaderContainer,
  HeaderIconsBox,
  HeaderSloganBox,
  HeaderToolkit,
} from "./styles";
import { Box, IconButton, MenuItem, Select, Typography } from "@mui/material";
import { AccountCircleOutlined, LanguageOutlined } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import Logotype from "assets/images/logotype.png";
import { Link } from "react-router-dom";
import theme from "theme";

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
        <Link>
          <img width="80px" height="80px" src={Logotype} alt="Logotype" />
        </Link>

        <HeaderSloganBox>{t("matrixSlogan")}</HeaderSloganBox>

        <HeaderIconsBox>
          <Select
            defaultValue="en"
            margin="none"
            variant="outlined"
            select
            value={language}
            onChange={handleChangeLanguage}
          >
            <MenuItem value={"en"}>EN</MenuItem>
            <MenuItem value={"ru"}>RU</MenuItem>
          </Select>

          <IconButton>
            <AccountCircleOutlined
              fontSize="large"
              sx={{
                color: theme.palette.colorOrange.main,
              }}
            />
          </IconButton>

          <IconButton>
            <LanguageOutlined
              fontSize="large"
              sx={{
                color: theme.palette.colorNeon.main,
              }}
            />
          </IconButton>
        </HeaderIconsBox>
      </HeaderToolkit>
    </HeaderContainer>
  );
};

export default Header;
