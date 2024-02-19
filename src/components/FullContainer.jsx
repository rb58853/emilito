import "./FullContainer.css"
import Marketplace from "./marketplace/Marketplace";
import ProductView from "./products/views/ProductView";
import products from "../data/static_products";

function FullContainer() {
  return <div className="full-container">
    {/* <Marketplace/> */}
    <ProductView product={products['p1']}/>
  </div>;
}

export default FullContainer;
