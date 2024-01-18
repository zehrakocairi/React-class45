import { useState, useEffect } from "react";
import "./productDetail.css";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  const { productId } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const fetchProductDetail = async function () {
    const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const product = await response.json();
    setProduct(product);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProductDetail();
  }, []);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div className="product-detail-container">
      <h1>Product Details</h1>
      <div className="product-detail-wrapper">
        <div className="detail-product-image">
          <img alt={product.title} src={product.image} />
        </div>
        <div className="product-details">
          <p>
            <b>Product Title:</b> {product.title}
          </p>
          <p>
            <b>Product Description:</b> {product.description}
          </p>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
