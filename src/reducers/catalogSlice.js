import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_DUMMY_PRODUCTS, API_NOTEBOOKS } from "requester";

const initialState = {
  isLoading: false,
  isLoadingPage: false,
  error: false,
  catalogList: [],
  catalogListFilterByBrand: [],
};

export const getProducts = createAsyncThunk(
  "productsList/get",
  async (currenPage) => {
    const response = await API_NOTEBOOKS.get(`notebooks/?page=${currenPage}`);
    return response.data;
  }
);

export const filterProductsByBrandsTest = createAsyncThunk(
  "productsList/get",
  async (brand) => {
    const response = await API_NOTEBOOKS.get(`notebooks/`);
    const data = response.data.results.filter((item) => item.brand === brand);
    console.log("filterBrandTest: ", data);
    return data;
  }
);

export const filterProductsByBrands = createAsyncThunk(
  "productsList/get",
  async (brand) => {
    const response = await API_NOTEBOOKS.get(`notebooks/?brand=${brand}`);
    console.log("filterBrand", response.data.results);
    return response.data.results;
  }
);

const catalogSlice = createSlice({
  name: "catalogSlice",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoadingPage = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.isLoadingPage = false;
      state.catalogList = action.payload.results;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    });
  },
});

export default catalogSlice.reducer;
