import { Box, Button, Collapse, Grid, Rating, Typography } from "@mui/material";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { productsAPI } from "requester";
import {
  NewProductBox,
  NewProductContainer,
  NewProductPrice,
  NewProductRating,
  NewProductTitle,
  PresentationTopSalesBox,
  TopSalesBox,
  TopSalesContainer,
  TopSalesPrice,
  TopSalesRating,
  TopSalesTitle,
} from "./styles";
import TitleNewProducts from "titles/TitleNewProducts";
import TitleTopSales from "titles/TitleTopSales";
import { useTranslation } from "react-i18next";
// import PropTypes from "prop-types";

const TopSales = () => {
  const [TopSales, setTopSales] = useState([]);
  const [isViewAll, setIsViewAll] = useState(false);

  const { t } = useTranslation();

  const togglewViewAll = () => {
    setIsViewAll((open) => !open);
  };

  const getTopSales = useCallback(async () => {
    const response = await axios.get(
      "https://dummyjson.com/products?limit=100"
    );
    const TopSalesFilter = await response.data.products.filter(
      (item) => item.discountPercentage < 4 && item.rating < 4.95
    );

    setTopSales(TopSalesFilter);
    console.log(TopSales);
  }, []);

  console.log("TopSales: ", TopSales);
  const TopSalesMain = TopSales.filter((item, index) => index <= 3);
  const TopSalesAdditional = TopSales.filter((item, index) => index >= 4);

  useEffect(() => {
    getTopSales();
  }, [getTopSales]);

  return (
    <PresentationTopSalesBox>
      <TitleTopSales />

      <TopSalesContainer>
        {TopSalesMain.map((item) => (
          <TopSalesBox>
            <img
              width={"250px"}
              height={"300px"}
              src={item.images[0]}
              alt={item.title}
            />

            <TopSalesTitle variant="h5">{item.title}</TopSalesTitle>
            <Box sx={{ display: "flex" }}>
              <Rating name="read-only" value={item.rating} readOnly />
              <TopSalesRating>{item.rating}</TopSalesRating>
            </Box>
            <TopSalesPrice>${item.price}</TopSalesPrice>
          </TopSalesBox>
        ))}
      </TopSalesContainer>

      <Collapse timeout={1500} in={isViewAll}>
        <TopSalesContainer>
          {TopSalesAdditional.map((item) => (
            <TopSalesBox>
              <img
                width={"250px"}
                height={"300px"}
                src={item.images[0]}
                alt={item.title}
              />

              <TopSalesTitle variant="h5">{item.title}</TopSalesTitle>
              <Box sx={{ display: "flex" }}>
                <Rating name="read-only" value={item.rating} readOnly />
                <TopSalesRating>{item.rating}</TopSalesRating>
              </Box>
              <TopSalesPrice>${item.price}</TopSalesPrice>
            </TopSalesBox>
          ))}
        </TopSalesContainer>
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
    </PresentationTopSalesBox>
  );
};

export default TopSales;
