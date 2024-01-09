import Categories from "../../components/category/Categories";
import Product from "../../components/product/Product";
import React from "react";

import "./home.css";
import useFetch from "../../hooks/useFetch";

const Home = () => {
  const [categories, , isLoadingForCategories] = useFetch("https://fakestoreapi.com/products/categories", []);

  const [filteredProducts, setFilteredProducts, isLoadingForProducts] = useFetch("https://fakestoreapi.com/products", []);

  const fetchProductsByCategory = async function (category) {
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    const products = await response.json();

    setFilteredProducts(products);
  };

  async function onCategoryChanged(newCategory) {
    await fetchProductsByCategory(newCategory);
  }

  return (
    <div className="App">
      <div>
        {isLoadingForCategories || isLoadingForProducts ? (
          <div className="loading">
            <p>Loading...</p>
          </div>
        ) : (
          <div>
            <h1>Products</h1>
            <Categories categoriesData={categories} onCategoryChanged={onCategoryChanged} />
            <div className="productContainer">
              {filteredProducts?.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Home;
