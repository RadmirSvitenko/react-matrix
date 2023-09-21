import React, { Fragment, createRef, useState } from "react";
import {
  HeaderContainer,
  HeaderIconsBox,
  HeaderLogIn,
  HeaderToolkit,
} from "./styles";
import {
  Autocomplete,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Menu,
  MenuItem,
  NativeSelect,
  Select,
  TextField,
  Tooltip,
} from "@mui/material";
import { LanguageOutlined } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import Logotype from "assets/images/logotype.png";
import { Link } from "react-router-dom";
import theme from "theme";
import TitleMatrixHeader from "titles/TitleMatrixHeader";
import AccountLogInButton from "mini_components/AccountLogInButton/AccountLogInButton";

const Header = () => {
  const [language, setLanguage] = useState("en");
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const { i18n } = useTranslation();

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeLanguage = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
    handleClose();
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <HeaderContainer>
      <HeaderToolkit>
        <Link>
          <img width="80px" height="80px" src={Logotype} alt="Logotype" />
        </Link>

        <TitleMatrixHeader />
        <HeaderIconsBox>
          <AccountLogInButton />

          <Tooltip title="Language">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <LanguageOutlined
                fontSize="large"
                sx={{
                  color: theme.palette.colorNeon.main,
                }}
              />
            </IconButton>
          </Tooltip>
        </HeaderIconsBox>

        <Menu
          value={language}
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
        >
          <MenuItem onClick={() => handleChangeLanguage("en")}>EN</MenuItem>
          <MenuItem onClick={() => handleChangeLanguage("ru")}>RU</MenuItem>
        </Menu>
      </HeaderToolkit>
    </HeaderContainer>
  );
};

export default Header;
