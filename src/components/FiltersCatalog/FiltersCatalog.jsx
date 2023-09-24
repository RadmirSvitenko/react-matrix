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
} from "reducers/catalogSlice";

const FiltersCatalog = () => {
  const [filterPrice, setFilterPrice] = useState([100, 2500]);

  const dispatch = useDispatch();

  const { t } = useTranslation();

  const handleFilterPrice = (event, newValue) => {
    setFilterPrice(newValue);
  };

  const handleFilterNotebooksByBrand = async (brand) => {
    dispatch(filterProductsByBrands(brand));
  };

  const filterProductsByBrandsTest = async (brand) => {
    dispatch(filterProductsByBrandsTest(brand));
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
            <Checkbox onChange={() => handleFilterNotebooksByBrand("Apple")} />
          </FilterVariand>

          <FilterVariand>
            ASUS{" "}
            <Checkbox onChange={() => handleFilterNotebooksByBrand("ASUS")} />
          </FilterVariand>

          <FilterVariand>
            ACER{" "}
            <Checkbox onChange={() => handleFilterNotebooksByBrand("Acer")} />
          </FilterVariand>

          <FilterVariand>
            LENOVO{" "}
            <Checkbox onChange={() => handleFilterNotebooksByBrand("Lenovo")} />
          </FilterVariand>

          <FilterVariand>
            DELL{" "}
            <Checkbox onChange={() => handleFilterNotebooksByBrand("Dell")} />
          </FilterVariand>

          <FilterVariand>
            HP <Checkbox onChange={() => handleFilterNotebooksByBrand("HP")} />
          </FilterVariand>

          <FilterVariand>
            INFINIX{" "}
            <Checkbox
              onChange={() => handleFilterNotebooksByBrand("INFINIX")}
            />
          </FilterVariand>

          <FilterVariand>
            MSI{" "}
            <Checkbox onChange={() => handleFilterNotebooksByBrand("MSI")} />
          </FilterVariand>
        </FilterVariandBox>

        <FilterTitle textAlign={"center"}>
          {t("catalogFilterCategoryTitle")}
        </FilterTitle>
        <Divider />

        <FilterVariandBox>
          <FilterVariand>
            {t("catalogFilterCategoryForWork")}
            <Checkbox onChange={() => handleFilterNotebooksByBrand("work")} />
          </FilterVariand>

          <FilterVariand>
            {t("catalogFilterCategoryForStudy")}
            <Checkbox onChange={() => handleFilterNotebooksByBrand("study")} />
          </FilterVariand>

          <FilterVariand>
            {t("catalogFilterCategoryForGaming")}
            <Checkbox onChange={() => handleFilterNotebooksByBrand("gaming")} />
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
