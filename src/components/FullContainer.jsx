import "./FullContainer.css"
import Marketplace from "./marketplace/Marketplace";
import ProductView from "./products/views/ProductView";

import products from "../data/static_products.js";
import BagView from "./bag/BagView";

function FullContainer() {
  return <div className="full-container">
    {/* <Marketplace/> */}
    {/* <ProductView product={products['p1']}/> */}
    <BagView items={products}/>
  </div>;
}

export default FullContainer;
