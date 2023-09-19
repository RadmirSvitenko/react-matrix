import React, { useCallback, useEffect, useState } from "react";
import {
  CatalogContainer,
  CatalogProductAbout,
  CatalogProductBox,
  CatalogProductBrand,
  CatalogProductInfo,
  CatalogProductList,
  CatalogProductPrice,
  CatalogProductTitle,
  CustomTabCatalog,
  CustomTabsCatalog,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "reducers/catalogSlice";
import { Box, Button, Rating } from "@mui/material";
import TitleCatalogProducts from "titles/TitleCatalogProducts";
import { useTranslation } from "react-i18next";
import theme from "theme";
import LoadingPage from "mini_components/LoadingPage/LoadingPage";
import { useNavigate } from "react-router-dom";
import HeaderCatalog from "components/HeaderCatalog/HeaderCatalog";
import SwitcherPages from "mini_components/SwitcherPages/SwitcherPages";
import FiltersCatalog from "components/FiltersCatalog/FiltersCatalog";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

const Catalog = () => {
  const [switchTab, setSwitchTab] = useState(0);

  const { t } = useTranslation();
  const navigate = useNavigate();

  const toDetails = (product) => {
    navigate(`/products/${product.id}`);
  };

  const handleSwitch = (index) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  const handleChange = (event, newValue) => {
    setSwitchTab(newValue);
  };

  const dispatch = useDispatch();

  const products = useSelector((state) => state.catalog.catalogList);
  const isLoadingPage = useSelector((state) => state.catalog.isLoadingPage);

  console.log("products: ", products);

  const getNotebooks = useCallback(async () => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    getNotebooks();
  }, [getNotebooks]);

  if (isLoadingPage) {
    return <LoadingPage />;
  }

  return (
    <CatalogContainer>
      <HeaderCatalog />

      <CustomTabsCatalog centered value={switchTab} onChange={handleChange}>
        <CustomTabCatalog
          sx={{
            fontFamily: theme.fonts.valeraRound,
            letterSpacing: "2px",
            fontWeight: "bold",
            textTransform: "uppercase",
            color: theme.palette.colorOrange.main,
          }}
          label={t("tabTitleCatalog")}
          {...handleSwitch(0)}
        />
        <CustomTabCatalog
          sx={{
            fontFamily: theme.fonts.valeraRound,
            letterSpacing: "2px",
            fontWeight: "bold",
            textTransform: "uppercase",
            color: theme.palette.colorOrange.main,
          }}
          label={t("tabTitleCategory")}
          {...handleSwitch(1)}
        />

        {/* <Button variant="text" onClick={toggleDrawer(anchor, true)}>
          Filters
        </Button> */}
      </CustomTabsCatalog>

      <CustomTabPanel value={switchTab} index={0}>
        <CatalogProductList>
          <TitleCatalogProducts />
          {products?.map((item) => (
            <CatalogProductBox>
              {/* <CatalogProductImage
                sx={{
                  backgroundImage: `url(${item.images[0]})`,
                }}
              ></CatalogProductImage> */}

              <img
                width={"270px"}
                height={"270px"}
                src={item.images[0]}
                alt={item.title}
                style={{ borderRadius: "25px" }}
              />
              <CatalogProductInfo onClick={() => toDetails(item)}>
                <CatalogProductTitle>{item.title}</CatalogProductTitle>
                <Rating readOnly value={5} />
                <CatalogProductBrand>{item.brand}</CatalogProductBrand>
                <CatalogProductPrice>${item.price}</CatalogProductPrice>
                <CatalogProductAbout>Узнать подробнее</CatalogProductAbout>
              </CatalogProductInfo>
            </CatalogProductBox>
          ))}
          <FiltersCatalog getProducts={getProducts} />
          <SwitcherPages />
        </CatalogProductList>
      </CustomTabPanel>
    </CatalogContainer>
  );
};

export default Catalog;
