import { configureStore } from "@reduxjs/toolkit";
import CatalogReduce from "./reducers/catalogSlice";

const store = configureStore({
  catalog: CatalogReduce,
});

export default store;
