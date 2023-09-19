import { Grid } from "@mui/material";
import LoadingPage from "mini_components/LoadingPage/LoadingPage";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "reducers/productDetailsSlice";
import { API_DUMMY_PRODUCTS } from "requester";

const ProductDetails = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const notebook = useSelector((state) => state.detailsProduct.detailsCard);
  console.log("notebook: ", notebook);

  const isLoadingPage = useSelector(
    (state) => state.detailsProduct.isLoadingPage
  );

  const getNotebooksDetails = useCallback(async () => {
    dispatch(getProductDetails(`${id}`));
  }, [id]);

  useEffect(() => {
    getNotebooksDetails();
  }, [getNotebooksDetails]);

  if (isLoadingPage) {
    return <LoadingPage />;
  }

  return (
    <Grid>
      <h1>{notebook.title}</h1>
    </Grid>
  );
};

export default ProductDetails;
