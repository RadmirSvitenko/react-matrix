import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_DUMMY_PRODUCTS, API_NOTEBOOKS } from "requester";

const initialState = {
  isLoading: false,
  isLoadingPage: false,
  error: false,
  catalogList: [],
  count: 0,
  catalogListFilterByBrand: [],
};

export const getProducts = createAsyncThunk(
  "productsList/get",
  async (params) => {
    const response = await API_NOTEBOOKS.get(`notebooks/`, { params });
    return response.data;
  }
);

export const searchProducts = createAsyncThunk(
  "productsList/search",
  async (params) => {
    const response = await API_NOTEBOOKS.get(`notebooks/`, { params });
    return response.data;
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
      state.count = action.payload.count;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    });
  },
});

export default catalogSlice.reducer;
