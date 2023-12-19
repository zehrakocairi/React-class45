import Categories from "../../components/category/Categories";
import Products from "../../components/product/Products";
import { useState, useEffect } from "react";
import categoriesData from "../../fake-data/all-categories.js";
import productsData from "../../fake-data/all-products.js";

const Home = () => {
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [categories, setCategories] = useState(categoriesData.map((category) => category.replace("FAKE:", "").trim()));

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
      <Products productsData={filteredProducts} />
    </div>
  );
};
export default Home;
