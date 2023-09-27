import { Box, Button, Grid, Tab, Tabs, Typography } from "@mui/material";
import LoadingPage from "mini_components/LoadingPage/LoadingPage";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "reducers/productDetailsSlice";
import { ProductDetailsContainer } from "./styles";
import HeaderCatalog from "components/HeaderCatalog/HeaderCatalog";
import { useTranslation } from "react-i18next";

import AboutProduct from "./aboutProduct/AboutProduct";
import Characteristics from "./characteristics/Characteristics";
import Reviews from "./reviews/Reviews";

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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ProductDetails = () => {
  const [detailsTab, setDetailsTab] = React.useState(0);

  const { t } = useTranslation();

  const dispatch = useDispatch();

  const { id } = useParams();

  const notebook = useSelector((state) => state.detailsProduct.detailsCard);
  console.log("notebook: ", notebook);

  const isLoadingPage = useSelector(
    (state) => state.detailsProduct.isLoadingPage
  );

  const getNotebooksDetails = useCallback(async () => {
    dispatch(getProductDetails(`${id}`));
  }, []);

  const handleChangeTabs = (event, newValue) => {
    setDetailsTab(newValue);
  };

  useEffect(() => {
    getNotebooksDetails();
  }, [getNotebooksDetails]);

  if (!notebook || isLoadingPage) {
    return <LoadingPage />;
  }

  return (
    <ProductDetailsContainer>
      <HeaderCatalog />

      <Box>
        <Tabs
          indicatorColor="secondary"
          textColor="secondary"
          centered
          value={detailsTab}
          onChange={handleChangeTabs}
          aria-label="basic tabs example"
        >
          <Tab label={t("cardDetailsTabAboutProduct")} {...a11yProps(0)} />
          <Tab label={t("cardDetailsTabCharacteristics")} {...a11yProps(1)} />
          <Tab label={t("cardDetailsTabReviews")} {...a11yProps(2)} />
        </Tabs>
      </Box>

      <CustomTabPanel value={detailsTab} index={0}>
        <AboutProduct notebook={notebook} />
      </CustomTabPanel>
      <CustomTabPanel value={detailsTab} index={1}>
        <Characteristics notebook={notebook} />
      </CustomTabPanel>
      <CustomTabPanel value={detailsTab} index={2}>
        <Reviews />
      </CustomTabPanel>
    </ProductDetailsContainer>
  );
};

export default ProductDetails;
