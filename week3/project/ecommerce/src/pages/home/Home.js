import Categories from "../../components/category/Categories";
import Product from "../../components/product/Product";
import { useState, useEffect } from "react";
import React from "react";

import "./home.css";

const Home = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchCategories = async function () {
    const response = await fetch("https://fakestoreapi.com/products/categories");
    const categories = await response.json();
    setCategories(categories);
  };

  const fetchProducts = async function () {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    setFilteredProducts(products);
  };

  const fetchProductsByCategory = async function (category) {
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    const products = await response.json();

    setFilteredProducts(products);
  };

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  async function onCategoryChanged(newCategory) {
    await fetchProductsByCategory(newCategory);
  }

  return (
    <div className="App">
      <h1>Products</h1>
      <Categories categoriesData={categories} onCategoryChanged={onCategoryChanged} />
      <div className="productContainer">
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
export default Home;
