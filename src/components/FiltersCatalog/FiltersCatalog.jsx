import { ExpandMore, Inbox, Mail } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  Drawer,
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
import {
  filterProductsByBrands,
  filterProductsByBrandsTest,
  getProducts,
} from "reducers/catalogSlice";

const FiltersCatalog = ({ setCurrentPage }) => {
  const [filterPrice, setFilterPrice] = useState([100, 2500]);
  const [filterChecked, setFilterChecked] = useState("");
  console.log("filtersChecked: ", filterChecked);

  const dispatch = useDispatch();

  const { t } = useTranslation();

  const handleFilterPrice = (event, newValue) => {
    setFilterPrice(newValue);
  };

  const handleFilterChange = async (event) => {
    const { name, checked } = event.target;
    console.log("checked: ", checked);
    console.log("name: ", name);
    await dispatch(getProducts({ page: 1, brand: name }));
    setCurrentPage(1);
    setFilterChecked(name);

    console.log("inside");
  };

  return (
    <Grid container width={"300px"}>
      <Box sx={{ width: "300px", padding: "10px" }}>
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
              onChange={handleFilterChange}
            />
          </FilterVariand>

          <FilterVariand>
            ASUS{" "}
            <Checkbox
              name="ASUS"
              checked={filterChecked === "ASUS"}
              onChange={handleFilterChange}
            />
          </FilterVariand>

          <FilterVariand>
            ACER{" "}
            <Checkbox
              name="Acer"
              checked={filterChecked === "Acer"}
              onChange={handleFilterChange}
            />
          </FilterVariand>

          <FilterVariand>
            LENOVO{" "}
            <Checkbox
              name="Lenovo"
              checked={filterChecked === "Lenovo"}
              onChange={handleFilterChange}
            />
          </FilterVariand>

          <FilterVariand>
            DELL{" "}
            <Checkbox
              name="Dell"
              checked={filterChecked === "Dell"}
              onChange={handleFilterChange}
            />
          </FilterVariand>

          <FilterVariand>
            HP{" "}
            <Checkbox
              name="HP"
              checked={filterChecked === "HP"}
              onChange={handleFilterChange}
            />
          </FilterVariand>

          <FilterVariand>
            INFINIX{" "}
            <Checkbox
              name="INFINIX"
              checked={filterChecked === "INFINIX"}
              onChange={handleFilterChange}
            />
          </FilterVariand>

          <FilterVariand>
            MSI{" "}
            <Checkbox
              name="MSI"
              checked={filterChecked === "MSI"}
              onChange={handleFilterChange}
            />
          </FilterVariand>
        </FilterVariandBox>

        <FilterTitle textAlign={"center"}>
          {t("catalogFilterCategoryTitle")}
        </FilterTitle>
        <Divider />

        <FilterVariandBox>
          <FilterVariand>
            {t("catalogFilterCategoryForWork")}
            <Checkbox onChange={() => handleFilterChange("work")} />
          </FilterVariand>

          <FilterVariand>
            {t("catalogFilterCategoryForStudy")}
            <Checkbox onChange={() => handleFilterChange("study")} />
          </FilterVariand>

          <FilterVariand>
            {t("catalogFilterCategoryForGaming")}
            <Checkbox onChange={() => handleFilterChange("gaming")} />
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
              onChange={handleFilterPrice}
              valueLabelDisplay="auto"
              max={2500}
              min={100}
              sx={{
                color: theme.palette.colorOrange.main,
              }}
            />
          </FilterVariand>
        </FilterVariandBox>
      </Box>
    </Grid>
  );
};

export default FiltersCatalog;
