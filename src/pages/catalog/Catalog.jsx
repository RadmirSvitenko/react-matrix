import React, { useCallback, useEffect, useState } from "react";
import {
  CatalogContainer,
  CatalogPaginationContainer,
  CatalogProductAbout,
  CatalogProductBox,
  CatalogProductBrand,
  CatalogProductContainer,
  CatalogProductInfo,
  CatalogProductList,
  CatalogProductPrice,
  CatalogProductStock,
  CatalogProductTitle,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "reducers/catalogSlice";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Pagination,
  Rating,
  Stack,
} from "@mui/material";
import TitleCatalogProducts from "titles/TitleCatalogProducts";
import { useTranslation } from "react-i18next";
import theme from "theme";
import LoadingPage from "mini_components/LoadingPage/LoadingPage";
import { useNavigate } from "react-router-dom";
import HeaderCatalog from "components/HeaderCatalog/HeaderCatalog";
import SwitcherPages from "mini_components/SwitcherPages/SwitcherPages";
import FiltersCatalog from "components/FiltersCatalog/FiltersCatalog";
import { getTokenFromCookies } from "cookies";
import { AddShoppingCart, Badge } from "@mui/icons-material";
import { postProductDetails } from "reducers/productDetailsSlice";
import { getUserCart } from "reducers/cartSlice";

const Catalog = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const token = getTokenFromCookies();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const toDetails = (product) => {
    navigate(`/product/${product.id}`);
  };

  const dispatch = useDispatch();

  const products = useSelector((state) => state.catalog.catalogList);
  const count = useSelector((state) => state.catalog.count);
  const isLoadingPage = useSelector((state) => state.catalog.isLoadingPage);
  const userCart = useSelector((state) => state.cartSlice.userCart);

  console.log("products: ", products);

  const getNotebooks = useCallback(async () => {
    dispatch(getProducts({ page: currentPage }));
  }, [dispatch, currentPage]);

  const getTotatQuantityCart = async () => {
    const cartData = await dispatch(getUserCart());
    console.log("testTotalHeaderQuantity: ", cartData);
  };

  const handleAddNotebooksToCart = async (notebook, id) => {
    console.log("resultAddCatalog", id);
    await dispatch(postProductDetails({ notebook, id }));
    getTotatQuantityCart();
  };

  const handleSwitchPageCatalog = (e, value) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    getNotebooks();
  }, [getNotebooks]);

  return (
    <CatalogContainer>
      <HeaderCatalog />

      <CatalogProductContainer>
        <FiltersCatalog setCurrentPage={setCurrentPage} />

        <CatalogProductList>
          <TitleCatalogProducts />
          {products?.map((item) => (
            <CatalogProductBox>
              <img
                width={"250px"}
                height={"250px"}
                src={item.images[0]}
                alt={item.title}
              />

              <CatalogProductInfo>
                <CatalogProductTitle>{item.title}</CatalogProductTitle>
                <Grid display={"flex"} justifyContent={"space-around"}>
                  <Rating readOnly value={item.avg_rating || 3} />
                  <CatalogProductBrand>{item.brand}</CatalogProductBrand>
                </Grid>

                <Grid display={"flex"} justifyContent={"space-around"}>
                  <CatalogProductStock>
                    {t("productDetailsStock")}: {item.stock}
                  </CatalogProductStock>
                  <CatalogProductPrice>${item.price}</CatalogProductPrice>
                </Grid>

                <Grid display={"flex"} justifyContent={"space-around"}>
                  <CatalogProductAbout onClick={() => toDetails(item)}>
                    {t("catalogButtonLearnMore")}
                  </CatalogProductAbout>
                  <IconButton
                    onClick={() => handleAddNotebooksToCart(item, item.id)}
                  >
                    <AddShoppingCart
                      sx={{
                        color: theme.palette.colorOrange.main,
                      }}
                    />
                  </IconButton>
                </Grid>
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
      </CatalogProductContainer>
    </CatalogContainer>
  );
};

export default Catalog;
