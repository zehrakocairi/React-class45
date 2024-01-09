import "./product.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import heartRegular from "../../assets/heart-regular.svg";
import heartSolid from "../../assets/heart-solid.svg";
import { ApplicationContext } from "../../contexts/ApplicationContext.js";

const Product = ({ product }) => {
  const { favoriteProductIds, setfavoriteProductsIds } = useContext(ApplicationContext);

  const isFavorite = (id) => favoriteProductIds.includes(id);

  const handleClick = (productId) => {
    if (!isFavorite(productId)) {
      setfavoriteProductsIds((prevFavorites) => [...prevFavorites, productId]);
    } else {
      setfavoriteProductsIds((prevFavorites) => prevFavorites.filter((id) => id !== productId));
    }
  };

  return (
    <div className="product">
      <img className="product-image" alt={product.title} src={product.image} />
      <Link to={"product/" + product.id}>{product.title}</Link>
      <img className="heart-icon" alt="heart-solid" src={isFavorite(product.id) ? heartSolid : heartRegular} onClick={() => handleClick(product.id)} />
    </div>
  );
};

export default Product;
