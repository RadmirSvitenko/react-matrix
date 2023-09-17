import React, { useCallback, useEffect, useState } from "react";
import { API_DUMMY_PRODUCTS, API_NOTEBOOKS } from "requester";
import {
  CatalogContainer,
  CatalogFilterContainer,
  CatalogProductAbout,
  CatalogProductBox,
  CatalogProductBrand,
  CatalogProductImage,
  CatalogProductInfo,
  CatalogProductList,
  CatalogProductPrice,
  CatalogProductTitle,
  CustomTabCatalog,
  CustomTabsCatalog,
} from "./styles";
import Header from "components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "reducers/catalogSlice";
import { Box, CircularProgress, Rating, Typography } from "@mui/material";
import TitleCatalogProducts from "titles/TitleCatalogProducts";
import { useTranslation } from "react-i18next";
import theme from "theme";
import LoadingPage from "mini_components/LoadingPage/LoadingPage";

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

  if (isLoadingPage === true) {
    return <LoadingPage />;
  }

  return (
    <CatalogContainer>
      <Header />

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
              <CatalogProductInfo>
                <CatalogProductTitle>{item.title}</CatalogProductTitle>
                <Rating readOnly value={item.rating} />
                <CatalogProductBrand>{item.brand}</CatalogProductBrand>
                <CatalogProductPrice>${item.price}</CatalogProductPrice>
                <CatalogProductAbout>Узнать подробнее</CatalogProductAbout>
              </CatalogProductInfo>
            </CatalogProductBox>
          ))}
        </CatalogProductList>
      </CustomTabPanel>
    </CatalogContainer>
  );
};

export default Catalog;
