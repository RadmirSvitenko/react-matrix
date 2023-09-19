import { Box, Button, Collapse, Grid, Rating, Typography } from "@mui/material";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { API_DUMMY_PRODUCTS, API_NOTEBOOKS, productsAPI } from "requester";
import {
  NewProductBox,
  NewProductContainer,
  NewProductPrice,
  NewProductRating,
  NewProductTitle,
  PresentationTopSalesBox,
  TopSalesBox,
  TopSalesBrand,
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
    const response = await API_NOTEBOOKS.get("notebooks/");
    const TopSalesFilter = await response.data.results.filter(
      (item) => item.stock < 180
    );

    setTopSales(TopSalesFilter);
    console.log(TopSales);
  }, []);

  console.log("TopSales: ", TopSales);
  const TopSalesMain = TopSales.filter((item, index) => index < 4);
  const TopSalesAdditional = TopSales.filter(
    (item, index) => index >= 4 && index <= 7
  );

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
            <Grid display={"flex"}>
              <TopSalesBrand>{item.brand}</TopSalesBrand>
              <Rating sx={{ margin: "0 10px" }} readOnly value={5} />
            </Grid>
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
              <Grid display={"flex"}>
                <TopSalesBrand>{item.brand}</TopSalesBrand>
                <Rating sx={{ margin: "0 10px" }} readOnly value={5} />
              </Grid>
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
