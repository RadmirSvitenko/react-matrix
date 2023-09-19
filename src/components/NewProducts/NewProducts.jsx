import { Box, Button, Collapse, Grid, Rating, Typography } from "@mui/material";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { API_DUMMY_PRODUCTS, API_NOTEBOOKS } from "requester";
import {
  NewProductBox,
  NewProductBrand,
  NewProductContainer,
  NewProductPrice,
  NewProductRating,
  NewProductTitle,
  PresentationNewProductsBox,
} from "./styles";
import TitleNewProducts from "titles/TitleNewProducts";
import { useTranslation } from "react-i18next";

const NewProducts = () => {
  const [newProducts, setNewProducts] = useState([]);
  const [isViewAll, setIsViewAll] = useState(false);

  const { t } = useTranslation();

  const togglewViewAll = () => {
    setIsViewAll((open) => !open);
  };

  const getNewProducts = useCallback(async () => {
    const response = await API_NOTEBOOKS.get("notebooks/?page=3");
    const newProductsFilter = await response.data.results.filter(
      (item) => item.stock > 90
    );

    setNewProducts(newProductsFilter);
    console.log(newProducts);
  }, []);

  console.log("newProducts: ", newProducts);

  const newProductsMain = newProducts.filter((item, index) => index < 4);
  const newProductsAdditional = newProducts.filter(
    (item, index) => index >= 4 && index <= 7
  );

  useEffect(() => {
    getNewProducts();
  }, [getNewProducts]);

  return (
    <PresentationNewProductsBox>
      <TitleNewProducts />

      <NewProductContainer>
        {newProductsMain.map((item) => (
          <NewProductBox>
            <img
              width={"250px"}
              height={"300px"}
              src={item.images[0]}
              alt={item.title}
            />

            <NewProductTitle variant="h5">{item.title}</NewProductTitle>
            <Grid display={"flex"}>
              <NewProductBrand>{item.brand}</NewProductBrand>
              <Rating
                sx={{ margin: "0 10px" }}
                readOnly
                value={3 ? item.avg_rating === null : item.avg_rating}
              />
            </Grid>
            <NewProductPrice>${item.price}</NewProductPrice>
          </NewProductBox>
        ))}
      </NewProductContainer>

      <Collapse timeout={1500} in={isViewAll}>
        <NewProductContainer>
          {newProductsAdditional.map((item) => (
            <NewProductBox>
              <img
                width={"250px"}
                height={"300px"}
                src={item.images[0]}
                alt={item.title}
              />

              <NewProductTitle variant="h5">{item.title}</NewProductTitle>
              <Grid display={"flex"}>
                <NewProductBrand>{item.brand}</NewProductBrand>
                <Rating
                  sx={{ margin: "0 10px" }}
                  readOnly
                  value={3 ? item.avg_rating === null : item.avg_rating}
                />
              </Grid>
              <NewProductPrice>${item.price}</NewProductPrice>
            </NewProductBox>
          ))}
        </NewProductContainer>
      </Collapse>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <Button
          sx={{
            color: "black",
            borderRadius: "62px",
            border: "1px solid rgba(0, 0, 0, 0.10)",
          }}
          variant="outlined"
          onClick={togglewViewAll}
        >
          {isViewAll ? t("buttonViewClose") : t("buttonViewAll")}
        </Button>
      </Box>
    </PresentationNewProductsBox>
  );
};

export default NewProducts;
