import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_DUMMY_PRODUCTS, API_NOTEBOOKS } from "requester";

const initialState = {
  isLoading: false,
  isLoadingPage: false,
  error: false,
  detailsCard: [],
};

export const getProductDetails = createAsyncThunk(
  "productsDetails/get",
  async (id) => {
    const response = await API_NOTEBOOKS.get(`notebooks/${id}`);
    return response.data;
  }
);

const productDetailsSlice = createSlice({
  name: "catalogSlice",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getProductDetails.pending, (state) => {
      state.isLoadingPage = true;
    });
    builder.addCase(getProductDetails.fulfilled, (state, action) => {
      state.isLoadingPage = false;
      state.detailsCard = action.payload;
    });
    builder.addCase(getProductDetails.rejected, (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    });
  },
});

export default productDetailsSlice.reducer;
