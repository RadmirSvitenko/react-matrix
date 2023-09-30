import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_DUMMY_PRODUCTS, API_NOTEBOOKS } from "requester";

const initialState = {
  isLoading: false,
  isLoadingPage: false,
  error: false,
  detailsCard: null,
};

export const getProductDetails = createAsyncThunk(
  "productsDetails/get",
  async (id) => {
    const response = await API_NOTEBOOKS.get(`notebooks/${id}`);
    return response.data;
  }
);

export const postProductDetails = createAsyncThunk(
  "productsDetails/post",
  async (params) => {
    const response = await API_NOTEBOOKS.post(
      `notebooks/${params.id}/cart/add/`,
      JSON.stringify(params.notebook)
    );
    console.log("postProductDetails", response.data);
    return response.data;
  }
);

export const getProductDetailsCommentaries = createAsyncThunk(
  "productsDetailsCommentaries/get",
  async (id) => {
    const response = await API_NOTEBOOKS.get(`notebooks/${id}/comments/`);
    return response.data;
  }
);

export const postProductDetailsCommentaries = createAsyncThunk(
  "productsDetailsCommentaries/post",
  async (id) => {
    const response = await API_NOTEBOOKS.post(`notebooks/${id}/comments/`);
    return response.data;
  }
);

const productDetailsSlice = createSlice({
  name: "productDetailsSlice",
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
