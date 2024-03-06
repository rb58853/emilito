import products from "../../data/static_products.js";
import series from "../../data/static_series.js";
import ProductContainer from "./Products/ProductContainer.jsx";
import SerieContainer from "./Series/SerieContainer/SerieContainer.jsx";
import "./Marketplace.css"

function Marketplace() {
  return <div>
    <SerieContainer items={series} />
    <div className='center_content'>
      <p className='featured_container'> Featured Products</p>
    </div>
    <ProductContainer items={products} />
  </div>;
}

export default Marketplace;
