import "./products.css";

const Products = ({ productsData }) => {
  return (
    <div id="product-container">
      {productsData.map((product) => {
        return (
          <div key={product.id} className="product">
            <img alt={product.title} src={product.image} />
            <p>{product.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
