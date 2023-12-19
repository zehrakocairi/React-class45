import { useState, useEffect } from "react";
import "./productDetail.css";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  const { productId } = useParams();

  const fetchProductDetail = async function () {
    debugger;
    const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const product = await response.json();
    setProduct(product);
  };
  useEffect(() => {
    fetchProductDetail();
  }, []);
  return (
    <div className="Product">
      <h1>Product Details</h1>
      <div className="product-details">
        <p>
          <b>Product Title:</b> {product.title}
        </p>
        <p>
          <b>Product Description:</b> {product.description}
        </p>
      </div>
      <div className="product-image">
        <img alt={product.title} src={product.image} />
      </div>
    </div>
  );
};
export default ProductDetail;
