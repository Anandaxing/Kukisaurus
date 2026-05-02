import "../../assets/styles/Products.css";
import { ProductsFile } from "./ProductsFile";
import "../../../public/fonts.css";

const Product = () => {
  return (
    <div className="productBigContainer poppins-regular">
      {ProductsFile.map((productItem) => {
        return (
        <div className="productContainer" key={productItem.key}>
          <div className="imageProductContainer">
            <img src={productItem.image} alt="" loading="lazy"/>
          </div>
          <div className="productDescription">
            <h2>{productItem.title}</h2>
            <p>{productItem.description}</p>
            <a href="https://api.whatsapp.com/send/?phone=6281391326445&text&type=phone_number&app_absent=0" target="blank">{productItem.price}</a>
          </div>
        </div>
        );
      })}
    </div>
  );
};

export default Product;