import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import { ThemeProvider } from "styled-components";
import { CssBaseline } from "@mui/material";
import Presentation from "./pages/presentation/Presentation";
import Catalog from "./pages/catalog/Catalog";
import ProductDetails from "./pages/presentation/Presentation";
import CartDetails from "./pages/cartDetails/CartDetails";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Presentation />} />
          <Route element={<MainLayout />}>
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<CartDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
