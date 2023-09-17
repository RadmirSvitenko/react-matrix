import { configureStore } from "@reduxjs/toolkit";
import CatalogReducer from "./reducers/catalogSlice";

const store = configureStore({
  reducer: {
    catalog: CatalogReducer,
  },
});

export default store;
