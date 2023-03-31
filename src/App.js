import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Home from "./components/Home/Home";
import CartContextProvider from "./context/CartContext";
import UserContextProvider from "./context/UserContext";
import Cart from "./components/Cart/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./themeConfig";
import LogIn from "./components/LogIn/LogIn";
import SignUp from "./components/SignUp/SignUp.jsx";
import Account from "./components/Account/Account";
import ChangePassword from "./components/ChangePassword/ChangePassword";
import ChangeName from "./components/ChangeName/ChangeName";
import ChangeEmail from "./components/ChangeEmail/ChangeEmail";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <UserContextProvider>
          <ThemeProvider theme={theme}>
            <Header />

            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/account" element={<Account />} />

              <Route path="changeName" element={<ChangeName />} />

              <Route path="changeEmail" element={<ChangeEmail />} />

              <Route path="changePassword" element={<ChangePassword />} />

              <Route
                path="/category/:categoryName"
                element={<ItemListContainer />}
              />

              <Route path="/item/:id" element={<ItemDetailContainer />} />

              <Route path="/cart" element={<Cart />} />

              <Route path="*" element={<h1>404 Not Found</h1>} />

              <Route path="/login" element={<LogIn />} />

              <Route path="/registro" element={<SignUp />} />
            </Routes>
          </ThemeProvider>
        </UserContextProvider>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
