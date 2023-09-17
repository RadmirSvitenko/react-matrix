import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import { ThemeProvider } from "styled-components";
import { CssBaseline } from "@mui/material";
import Presentation from "./pages/presentation/Presentation";
import Catalog from "./pages/catalog/Catalog";
import ProductDetails from "./pages/presentation/Presentation";
import CartDetails from "./pages/cartDetails/CartDetails";
import { Provider } from "react-redux";
import theme from "./theme";
import store from "store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Presentation />} />
            <Route element={<MainLayout />}>
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<CartDetails />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
