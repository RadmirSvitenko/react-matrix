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
  const { t } = useTranslation();
  const navigate = useNavigate();

  const toDetails = (product) => {
    navigate(`/products/${product.id}`);
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

      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "100vh",
          flexWrap: "nowrap",
          justifyContent: "space-between",
        }}
      >
        <FiltersCatalog getProducts={getProducts} />
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
          <SwitcherPages />
        </CatalogProductList>
      </Box>
    </CatalogContainer>
  );
};

export default Catalog;
