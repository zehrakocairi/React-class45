import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/shared/Layout.js";
import Home from "./pages/home/Home.js";
import ProductDetail from "./pages/productDetail/ProductDetail.js";
import ApplicationProvider from "./contexts/ApplicationContext.js";
import FavoriteProducts from "./pages/favoriteProducts/FavoriteProducts.js";

function App() {
  return (
    <div className="App">
      <ApplicationProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/product/:productId" element={<ProductDetail />} />
              <Route path="/favorites" element={<FavoriteProducts />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ApplicationProvider>
    </div>
  );
}

export default App;
