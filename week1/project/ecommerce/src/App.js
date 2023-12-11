import "./App.css";
import { useState } from "react";
import Categories from "./components/category/Categories.js";
import Products from "./components/product/Products.js";
import categoriesData from "./fake-data/all-categories.js";
import productsData from "./fake-data/all-products.js";

function App() {
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [categories] = useState(categoriesData.map((category) => category.replace("FAKE:", "").trim()));

  function onCategoryChanged(newCategory) {
    setFilteredProducts(productsData.filter((product) => product.category === newCategory));
  }

  return (
    <div className="App">
      <h1>Products</h1>
      <Categories categoriesData={categories} onCategoryChanged={onCategoryChanged} />
      <Products productsData={filteredProducts} />
    </div>
  );
}

export default App;
