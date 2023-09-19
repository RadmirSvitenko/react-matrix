import { configureStore } from "@reduxjs/toolkit";
import CatalogReducer from "./reducers/catalogSlice";
import DetailsReducer from "./reducers/productDetailsSlice";

const store = configureStore({
  reducer: {
    catalog: CatalogReducer,
    detailsProduct: DetailsReducer,
  },
});

export default store;
