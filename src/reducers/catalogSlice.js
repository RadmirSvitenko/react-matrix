import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isLoadingPage: false,
  error: false,
  catalogList: {},
};

const catalogSlice = createSlice({
  name: "catalogSlice",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    // builder.addCase(getFilmDetails.pending, (state) => {
    //   state.isLoading = true;
    // });
    // builder.addCase(getFilmDetails.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.details = action.payload;
    // });
    // builder.addCase(getFilmDetails.rejected, (state, action) => {
    //   state.error = action.error;
    //   state.isLoading = false;
    // });
  },
});
