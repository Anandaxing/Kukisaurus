import "../../public/fonts.css";
import Product from "./ProductsFolder/Product.jsx";
import "../assets/styles/Products.css";

const Products = () => {
  return (
    <div id="product" className="productsContainer poppins-regular">
      <h1>Our Product</h1>
      <p className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, fugit?</p>
      <Product />
    </div>
  );
};

export default Products;