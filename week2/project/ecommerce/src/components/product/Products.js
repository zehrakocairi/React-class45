import "./products.css";
import { Link } from "react-router-dom";

const Products = ({ productsData }) => {
  return (
    <div id="product-container">
      {productsData.map((product) => {
        return (
          <div key={product.id} className="product">
            <img alt={product.title} src={product.image} />
            <Link to={"product/" + product.id}>{product.title}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
