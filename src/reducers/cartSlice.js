import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { API_NOTEBOOKS } from "requester";

const initialState = {
  isLoading: false,
  isLoadingPage: false,
  error: false,
  userCart: [],
};

export const getUserCart = createAsyncThunk("getUserCart/get", async () => {
  const response = await API_NOTEBOOKS.get(`cart/`);
  console.log("getUserCart", response.data.results);
  return response.data.results;
});

export const postDeleteProductModalcart = createAsyncThunk(
  "postDeleteProductModalcart/post",
  async (params) => {
    const response = await API_NOTEBOOKS.post(
      `notebooks/${params.id}/cart/remove/`,
      JSON.stringify(params.notebook)
    );
    console.log("postDeleteProductModalcart", response.data);
    return response.data;
  }
);

const cartSlice = createSlice({
  name: "productDetailsSlice",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getUserCart.pending, (state) => {
      state.isLoadingPage = true;
    });

    builder.addCase(getUserCart.fulfilled, (state, action) => {
      state.isLoadingPage = false;
      state.userCart = action.payload;
    });

    builder.addCase(getUserCart.rejected, (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    });
  },
});

export default cartSlice.reducer;
