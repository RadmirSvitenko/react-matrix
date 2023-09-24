import React, { useEffect, useState } from "react";
import {
  CatalogSearch,
  HeaderContainer,
  HeaderIconsBox,
  HeaderToolkit,
} from "./styles";
import {
  Avatar,
  Badge,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import {
  LanguageOutlined,
  Search,
  ShoppingCartRounded,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import Logotype from "assets/images/logotype.png";
import { Link } from "react-router-dom";
import theme from "theme";
import TitleMatrixHeader from "titles/TitleMatrixHeader";
import { Transition } from "@react-spring/web";
import Authentification from "components/Authentification/Authentification";
import AccountLogInButton from "mini_components/AccountLogInButton/AccountLogInButton";
import AccountIconButton from "mini_components/AccountIconButton/AccountIconButton";
import ModalCart from "components/ModalCart/ModalCart";
import axios from "axios";
import { API_DUMMY, API_DUMMY_PRODUCTS } from "requester";

const HeaderCatalog = () => {
  const [language, setLanguage] = useState("en");
  const [anchorEl, setAnchorEl] = useState(null);
  const [openCart, setOpenCart] = useState(false);
  // const [userIcon, setUserIcon] = useState();
  // console.log("userIcon: ", userIcon);

  const numberUser = Math.floor(Math.random() * 10);
  console.log("numberUser: ", numberUser);

  // const getIconUser = async () => {
  //   const response = await API_DUMMY.get(`users/5`);
  //   const user = await response.data;
  //   setUserIcon(user);
  // };

  const open = Boolean(anchorEl);

  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const handleClose = () => {
    setAnchorEl(null);
  };
  const toggleModalCart = () => {
    setOpenCart((open) => !open);
  };

  const handleChangeLanguage = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
    handleClose();
  };

  const handleClickLanguage = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleToUpPage = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  // useEffect(() => {
  //   getIconUser();
  // }, []);

  return (
    <HeaderContainer>
      <HeaderToolkit>
        <Link onClick={handleToUpPage}>
          <img width="80px" height="80px" src={Logotype} alt="Logotype" />
        </Link>

        <CatalogSearch
          sx={{
            flexGrow: 1,
            margin: "0px 300px",
          }}
          InputProps={{
            endAdornment: (
              <IconButton>
                <Search
                  sx={{
                    color: theme.palette.colorNeon.main,
                  }}
                />
              </IconButton>
            ),
          }}
          InputLabelProps={{
            style: { color: theme.palette.colorNeon.main },
          }}
          label={t("labelCatalogSearch")}
        />

        <HeaderIconsBox>
          <IconButton>
            <Avatar
              sizes="medium"
              alt="Avatar"
              // src={userIcon.image}
              sx={{
                backgroundColor: theme.palette.colorOrange.main,
              }}
            >
              R
            </Avatar>
          </IconButton>

          <IconButton onClick={toggleModalCart}>
            <Badge color="success" badgeContent={0}>
              <ShoppingCartRounded
                fontSize="large"
                sx={{
                  color: theme.palette.colorOrange.main,
                }}
              />
            </Badge>
          </IconButton>

          <Tooltip title="Language">
            <IconButton
              onClick={handleClickLanguage}
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
        </HeaderIconsBox>
      </HeaderToolkit>

      <ModalCart open={openCart} onClose={toggleModalCart} />
    </HeaderContainer>
  );
};

export default HeaderCatalog;
