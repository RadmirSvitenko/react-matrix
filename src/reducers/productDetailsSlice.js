import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_NOTEBOOKS } from "requester";

const initialState = {
  isLoading: false,
  isLoadingPage: false,
  error: false,
  detailsCard: null,
  comments: [],
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
  async (params) => {
    const response = await API_NOTEBOOKS.get(
      `notebooks/${params.id}/comments/`,
      { params: params }
    );
    return response.data;
  }
);

export const postProductDetailsCommentaries = createAsyncThunk(
  "productsDetailsCommentaries/post",
  async (params) => {
    const response = await API_NOTEBOOKS.post(
      `notebooks/${params.id}/comments/`,
      {
        method: "POST",
        content: JSON.stringify(params.comment),
        headers: {
          "Content-Type": "application/json",
        },
      },
      console.log("params.comment", params.comment)
    );
    const data = await response.JSON();
    return data;
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
      state.comments = action.payload;
    });

    builder.addCase(getProductDetails.rejected, (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    });

    builder.addCase(getProductDetailsCommentaries.pending, (state) => {
      state.isLoadingPage = true;
    });

    builder.addCase(
      getProductDetailsCommentaries.fulfilled,
      (state, action) => {
        state.isLoadingPage = false;
        state.comments = action.payload;
      }
    );

    builder.addCase(getProductDetailsCommentaries.rejected, (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    });
  },
});

export default productDetailsSlice.reducer;
