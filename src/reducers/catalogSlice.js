import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_DUMMY_PRODUCTS, API_NOTEBOOKS } from "requester";

const initialState = {
  isLoading: false,
  isLoadingPage: false,
  error: false,
  catalogList: [],
};

export const getProducts = createAsyncThunk("productsList/get", async () => {
  const response = await API_DUMMY_PRODUCTS.get("products?limit=100");
  return response.data;
});

const catalogSlice = createSlice({
  name: "catalogSlice",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoadingPage = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.isLoadingPage = false;
      state.catalogList = action.payload.products;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    });
  },
});

export default catalogSlice.reducer;
