import products from "../../data/static_products.js";
import ProductContainer from "./container.jsx";
import "./Marketplace.css"

function Marketplace() {
  return <div className="market">
    <ProductContainer items = {products}/>
  </div>;
}

export default Marketplace;
