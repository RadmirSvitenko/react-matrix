import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import { ThemeProvider } from "styled-components";
import { CssBaseline } from "@mui/material";
import Presentation from "./pages/presentation/Presentation";
import Catalog from "./pages/catalog/Catalog";
import { Provider } from "react-redux";
import theme from "./theme";
import store from "store";
import ProductDetails from "pages/productDetails/ProductDetails";
import { getTokenFromCookies } from "cookies";
import Payment from "pages/payment/Payment";
import BlockedAccess from "pages/blockedAccessAuth/BlockedAccess";
import { useEffect, useState } from "react";
function App() {
  let token = getTokenFromCookies();
  console.log("token: ", token);
  useEffect(() => {
    token = getTokenFromCookies();
  }, [token, getTokenFromCookies]);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Presentation />} />
            <Route path={"/access-auth"} element={<BlockedAccess />} />

            <Route
              element={token !== undefined ? <MainLayout /> : <BlockedAccess />}
            >
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/payment" element={<Payment />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
