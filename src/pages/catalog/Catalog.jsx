import React, { useCallback, useEffect, useState } from "react";
import {
  CatalogContainer,
  CatalogPaginationContainer,
  CatalogProductAbout,
  CatalogProductBox,
  CatalogProductBrand,
  CatalogProductInfo,
  CatalogProductList,
  CatalogProductPrice,
  CatalogProductTitle,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "reducers/catalogSlice";
import { Box, Button, Grid, Pagination, Rating, Stack } from "@mui/material";
import TitleCatalogProducts from "titles/TitleCatalogProducts";
import { useTranslation } from "react-i18next";
import theme from "theme";
import LoadingPage from "mini_components/LoadingPage/LoadingPage";
import { useNavigate } from "react-router-dom";
import HeaderCatalog from "components/HeaderCatalog/HeaderCatalog";
import SwitcherPages from "mini_components/SwitcherPages/SwitcherPages";
import FiltersCatalog from "components/FiltersCatalog/FiltersCatalog";

const Catalog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  console.log("currentPage: ", currentPage);

  const { t } = useTranslation();
  const navigate = useNavigate();

  const toDetails = (product) => {
    navigate(`/product/${product.id}`);
  };

  const dispatch = useDispatch();

  const products = useSelector((state) => state.catalog.catalogList);
  const count = useSelector((state) => state.catalog.count);
  const isLoadingPage = useSelector((state) => state.catalog.isLoadingPage);

  console.log("products: ", products);

  const getNotebooks = useCallback(async () => {
    dispatch(getProducts({ page: currentPage }));
  }, [dispatch, currentPage]);

  const handleSwitchPageCatalog = (e, value) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    getNotebooks();
  }, [getNotebooks]);

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
        <FiltersCatalog setCurrentPage={setCurrentPage} />

        <CatalogProductList>
          <TitleCatalogProducts />
          {products?.map((item) => (
            <CatalogProductBox>
              <img
                width={"270px"}
                height={"270px"}
                src={item.images[0]}
                alt={item.title}
                style={{ borderRadius: "25px" }}
              />
              <CatalogProductInfo onClick={() => toDetails(item)}>
                <CatalogProductTitle>{item.title}</CatalogProductTitle>
                <Rating readOnly value={item.avg_rating || 3} />
                <CatalogProductBrand>{item.brand}</CatalogProductBrand>
                <CatalogProductPrice>${item.price}</CatalogProductPrice>
                <CatalogProductAbout>Узнать подробнее</CatalogProductAbout>
              </CatalogProductInfo>
            </CatalogProductBox>
          ))}

          <CatalogPaginationContainer>
            <Stack spacing={2}>
              <Pagination
                onChange={handleSwitchPageCatalog}
                count={Math.floor(count / 10)}
                page={currentPage}
                siblingCount={2}
                color="primary"
                showFirstButton
                showLastButton
              />
            </Stack>
          </CatalogPaginationContainer>
        </CatalogProductList>
      </Box>
    </CatalogContainer>
  );
};

export default Catalog;
