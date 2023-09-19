import { ExpandMore, Inbox, Mail } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
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
import React, { Fragment, useState } from "react";
import { API_NOTEBOOKS } from "requester";
import { FilterTitle, FilterVariand, FilterVariandBox } from "./styles";
import theme from "theme";

const FiltersCatalog = ({ getProducts }) => {
  const [filterPrice, setFilterPrice] = useState([0, 3000]);
  const [drawerPosition, setDrawerPosotion] = useState({
    left: false,
  });

  const handleFilterPrice = (event, newValue) => {
    setFilterPrice(newValue);
  };

  const handleChangeByBrand = async () => {
    const response = await API_NOTEBOOKS("notebooks/");
    const data = response.data.results.filter((item) => item.brand === "Apple");
    console.log("data: ", data);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerPosotion({ ...drawerPosition, [anchor]: open });
  };

  const listDrawer = (anchor) => (
    <Grid container width={"300px"}>
      <Box
        sx={{ width: "300px", padding: "10px" }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
      >
        <FilterTitle textAlign={"center"}>Brands</FilterTitle>
        <Divider />

        <FilterVariandBox>
          <FilterVariand>
            APPLE <Checkbox onClick={handleChangeByBrand} />
          </FilterVariand>

          <FilterVariand>
            ASUS <Checkbox onClick={handleChangeByBrand} />
          </FilterVariand>

          <FilterVariand>
            ACER <Checkbox onClick={handleChangeByBrand} />
          </FilterVariand>

          <FilterVariand>
            LENOVO <Checkbox onClick={handleChangeByBrand} />
          </FilterVariand>

          <FilterVariand>
            HP <Checkbox onClick={handleChangeByBrand} />
          </FilterVariand>

          <FilterVariand>
            MSI <Checkbox onClick={handleChangeByBrand} />
          </FilterVariand>
        </FilterVariandBox>

        <FilterTitle textAlign={"center"}>Category</FilterTitle>
        <Divider />

        <FilterVariandBox>
          <FilterVariand>
            For work <Checkbox onClick={handleChangeByBrand} />
          </FilterVariand>

          <FilterVariand>
            For study <Checkbox onClick={handleChangeByBrand} />
          </FilterVariand>

          <FilterVariand>
            For gaming <Checkbox onClick={handleChangeByBrand} />
          </FilterVariand>
        </FilterVariandBox>

        <FilterTitle textAlign={"center"}>Price</FilterTitle>
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
              // getAriaValueText={valuetext}
            />
          </FilterVariand>
        </FilterVariandBox>

        {/* <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion disabled>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>Disabled Accordion</Typography>
          </AccordionSummary>
        </Accordion> */}
      </Box>
    </Grid>
  );

  return (
    <Grid>
      {["left"].map((anchor) => (
        <Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            sx={{
              zIndex: "3000",
            }}
            variant="temporary"
            anchor={anchor}
            open={drawerPosition[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {listDrawer(anchor)}
          </Drawer>
        </Fragment>
      ))}
    </Grid>
  );
};

export default FiltersCatalog;
