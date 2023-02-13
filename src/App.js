
import Header from "./components/Header/Header"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (

    <BrowserRouter>

      <Header />

        <Routes>

          <Route path="/" element={ <ItemListContainer  /> } />

          <Route path="/category/:categoryName" element={ <ItemListContainer  /> } />

          <Route path="/item/:id" element={ <ItemDetailContainer /> } />

          <Route path="*" element={ <h1>404 Not Found</h1> } />

        </Routes>

    </BrowserRouter>
  );
}

export default App;
