import products from "../../data/static_products.js";
import series from "../../data/static_series.js";
import ProductContainer from "./container.jsx";
import SerieContainer from "./SerieContainer.jsx";
import "./Marketplace.css"
import BagView from "../bag/BagView.jsx";

function Marketplace() {
  return <div>
    <SerieContainer items = {series}/>
    <ProductContainer items = {products}/>
  </div>;
}

export default Marketplace;
