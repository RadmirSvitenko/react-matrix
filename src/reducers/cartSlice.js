import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_NOTEBOOKS } from "requester";

const initialState = {
  isLoading: false,
  isLoadingPage: false,
  error: false,
  userCart: null,
};

export const getUserCart = createAsyncThunk("getUserCart/get", async () => {
  const response = await API_NOTEBOOKS.get(`cart/`);
  console.log("getUserCart", response.data.results);
  return response.data.results;
});

const cartSlice = createSlice({
  name: "productDetailsSlice",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getUserCart.pending, (state) => {
      state.isLoadingPage = true;
    });

    builder.addCase(getUserCart.fulfilled, (state, action) => {
      state.isLoadingPage = false;
      state.userCart = action.payload.results;
    });

    builder.addCase(getUserCart.rejected, (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    });
  },
});

export default cartSlice.reducer;
