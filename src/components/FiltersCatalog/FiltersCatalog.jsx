import { ExpandMore, Inbox, Mail } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Select,
  Slider,
  Typography,
} from "@mui/material";
import React, { Fragment, useCallback, useEffect, useState } from "react";
import { API_NOTEBOOKS } from "requester";
import { FilterTitle, FilterVariand, FilterVariandBox } from "./styles";
import theme from "theme";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { getProducts } from "reducers/catalogSlice";

const FiltersCatalog = ({ currentPage, setCurrentPage }) => {
  const [filterPrice, setFilterPrice] = useState([100, 3000]);
  const [filterChecked, setFilterChecked] = useState("");
  console.log("filtersChecked: ", filterChecked);
  console.log("filterPrice: ", filterPrice);

  const dispatch = useDispatch();

  const { t } = useTranslation();

  const handleChangeFilterPrice = async (event, newValue) => {
    setFilterPrice(newValue);
  };

  const handleChangeFilterPriceRequest = async () => {
    await dispatch(
      getProducts({
        page: 1,
        min_price: filterPrice[0],
        max_price: filterPrice[1],
        limit: 400,
      })
    );
    setCurrentPage(1);
  };

  const handleChangeFilterBrands = async (event) => {
    const { name, checked } = event.target;
    console.log("checked: ", checked);
    console.log("name: ", name);
    await dispatch(getProducts({ page: currentPage, brand: name, limit: 400 }));
    setCurrentPage(1);
    setFilterChecked(name);
  };

  const handleGetProducts = async () => {
    await dispatch(getProducts({ page: 1 }));
  };

  return (
    <Grid
      position={"sticky"}
      container
      width={"300px"}
      sx={{
        [theme.breakpoints.down("sm")]: {
          width: "100%",
        },
      }}
    >
      <Box sx={{ width: "100%", padding: "10px" }}>
        <FilterTitle textAlign={"center"}>
          {t("catalogFilterBrandsTitle")}
        </FilterTitle>
        <Divider />

        <FilterVariandBox>
          <FilterVariand>
            APPLE{" "}
            <Checkbox
              name="Apple"
              checked={filterChecked === "Apple"}
              onChange={handleChangeFilterBrands}
            />
          </FilterVariand>

          <FilterVariand>
            ASUS{" "}
            <Checkbox
              name="ASUS"
              checked={filterChecked === "ASUS"}
              onChange={handleChangeFilterBrands}
            />
          </FilterVariand>

          <FilterVariand>
            ACER{" "}
            <Checkbox
              name="Acer"
              checked={filterChecked === "Acer"}
              onChange={handleChangeFilterBrands}
            />
          </FilterVariand>

          <FilterVariand>
            LENOVO{" "}
            <Checkbox
              name="Lenovo"
              checked={filterChecked === "Lenovo"}
              onChange={handleChangeFilterBrands}
            />
          </FilterVariand>

          <FilterVariand>
            DELL{" "}
            <Checkbox
              name="Dell"
              checked={filterChecked === "Dell"}
              onChange={handleChangeFilterBrands}
            />
          </FilterVariand>

          <FilterVariand>
            HP{" "}
            <Checkbox
              name="HP"
              checked={filterChecked === "HP"}
              onChange={handleChangeFilterBrands}
            />
          </FilterVariand>

          <FilterVariand>
            INFINIX{" "}
            <Checkbox
              name="INFINIX"
              checked={filterChecked === "INFINIX"}
              onChange={handleChangeFilterBrands}
            />
          </FilterVariand>

          <FilterVariand>
            MSI{" "}
            <Checkbox
              name="MSI"
              checked={filterChecked === "MSI"}
              onChange={handleChangeFilterBrands}
            />
          </FilterVariand>
        </FilterVariandBox>

        <FilterTitle textAlign={"center"}>
          {t("catalogFilterPriceTitle")}
        </FilterTitle>
        <Divider />

        <FilterVariandBox>
          <FilterVariand
            sx={{
              padding: "15px",
            }}
          >
            <Slider
              aria-label="Filter Price"
              value={filterPrice}
              onChange={handleChangeFilterPrice}
              onMouseUp={handleChangeFilterPriceRequest}
              valueLabelDisplay="auto"
              max={3000}
              min={100}
              sx={{
                color: theme.palette.colorOrange.main,
              }}
            />
          </FilterVariand>
        </FilterVariandBox>

        <Divider />

        <FilterVariandBox>
          <FilterVariand>
            <Button variant="contained" onClick={() => handleGetProducts()}>
              Reset filters
            </Button>
          </FilterVariand>
        </FilterVariandBox>
      </Box>
    </Grid>
  );
};

export default FiltersCatalog;
