import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartContextProvider from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./themeConfig";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <ThemeProvider theme={theme}>
          <Header />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />

            <Route
              path="/category/:categoryName"
              element={<ItemListContainer />}
            />

            <Route path="/item/:id" element={<ItemDetailContainer />} />

            <Route path="/cart" element={<Cart />} />

            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </ThemeProvider>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
