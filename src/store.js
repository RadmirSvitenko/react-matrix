import { configureStore } from "@reduxjs/toolkit";
import CatalogReducer from "./reducers/catalogSlice";
import DetailsReducer from "./reducers/productDetailsSlice";
import CartReducer from "./reducers/cartSlice";

const store = configureStore({
  reducer: {
    catalog: CatalogReducer,
    detailsProduct: DetailsReducer,
    cartSlice: CartReducer,
  },
});

export default store;
