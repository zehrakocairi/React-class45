import { ApplicationContext } from "../../contexts/ApplicationContext.js";
import { useContext, useEffect, useState } from "react";
import Product from "../../components/product/Product.js";

const FavoriteProducts = () => {
  const { favoriteProductIds } = useContext(ApplicationContext);
  const [favorites, setFavorite] = useState([]);

  useEffect(() => {
    async function getFavoriteProducts() {
      const data = await Promise.all(
        favoriteProductIds.map((productId) => {
          return fetch(`https://fakestoreapi.com/products/${productId}`).then((response) => response.json());
        })
      );

      setFavorite([...data]);
    }
    getFavoriteProducts();
  }, [favorites]);

  return (
    <>
      <h1>Favorite Products</h1>
      <div className="productContainer">
        {favorites.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default FavoriteProducts;
