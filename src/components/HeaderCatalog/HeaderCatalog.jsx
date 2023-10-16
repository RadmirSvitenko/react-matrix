import React, { Fragment, useEffect, useState } from "react";
import {
  CatalogSearch,
  HeaderContainer,
  HeaderIconsBox,
  HeaderToolkit,
} from "./styles";
import {
  Avatar,
  Badge,
  Box,
  Divider,
  IconButton,
  List,
  Menu,
  MenuItem,
  SwipeableDrawer,
  Tooltip,
} from "@mui/material";
import {
  Close,
  LanguageOutlined,
  MenuRounded,
  Search,
  ShoppingCartRounded,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import Logotype from "assets/images/logotype.png";
import theme from "theme";
import ModalCart from "components/ModalCart/ModalCart";
import { getProducts, searchProducts } from "reducers/catalogSlice";
import { useDispatch, useSelector } from "react-redux";
import { getUserCart } from "reducers/cartSlice";

const HeaderCatalog = () => {
  const userCart = useSelector((state) => state.cartSlice.userCart);

  const [language, setLanguage] = useState("en");
  const [anchorEl, setAnchorEl] = useState(null);
  const [openCart, setOpenCart] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [mobileDrawer, setMobileDrawer] = useState({
    left: false,
  });

  console.log("searchValue: ", searchValue);

  const dispatch = useDispatch();

  const open = Boolean(anchorEl);

  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const getTotatQuantityCart = async () => {
    const cartData = await dispatch(getUserCart());
    console.log("testTotalHeaderQuantity: ", cartData);
  };

  let totalQuantity = userCart.reduce((acc, { quantity }) => acc + quantity, 0);

  const handleOpenMobileMenu = (anchor, open) => (event) => {
    setMobileDrawer({ ...mobileDrawer, [anchor]: open });
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleModalCart = () => {
    setOpenCart((open) => !open);
  };

  const handleClearSearchValue = () => {
    setSearchValue("");
  };

  const handleSearchNotebooks = async (e) => {
    setSearchValue(e.target.value);
    console.log(e.target.value);
    await dispatch(searchProducts({ searchValue: searchValue, limit: 400 }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(getProducts({ page: 1, search: searchValue }));
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

  //* Drawer */

  //* Drawer */

  useEffect(() => {
    getTotatQuantityCart();
  }, []);

  return (
    <HeaderContainer>
      <HeaderToolkit>
        <Box onClick={handleToUpPage}>
          <img width="80px" height="80px" src={Logotype} alt="Logotype" />
        </Box>

        <Box
          display={[theme.breakpoints.down("sm")] ? "none" : "flex"}
          justifyContent={"space-between"}
        >
          <IconButton>
            <Avatar
              sizes="medium"
              alt="Avatar"
              sx={{
                backgroundColor: theme.palette.colorOrange.main,
              }}
            >
              R
            </Avatar>
          </IconButton>
        </Box>

        <Box
          sx={{
            [theme.breakpoints.down("sm")]: {
              display: "none",
            },
          }}
        >
          <form onSubmit={handleSubmit}>
            <CatalogSearch
              value={searchValue}
              onChange={handleSearchNotebooks}
              InputProps={{
                endAdornment: (
                  <IconButton
                    type="submit"
                    sx={{ color: theme.palette.colorOrange.main }}
                  >
                    {searchValue.length >= 1 ? (
                      <Close onClick={handleClearSearchValue} />
                    ) : (
                      <Search />
                    )}
                  </IconButton>
                ),
              }}
              InputLabelProps={{
                style: { color: theme.palette.colorOrange.main },
              }}
              label={t("labelCatalogSearch")}
            />
          </form>
        </Box>

        <HeaderIconsBox>
          <IconButton onClick={toggleModalCart}>
            <Badge color="success" badgeContent={totalQuantity}>
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
