import Categories from "../../components/category/Categories";
import Products from "../../components/product/Products";
import { useState, useEffect } from "react";

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
      <Products productsData={filteredProducts} />
    </div>
  );
};
export default Home;
