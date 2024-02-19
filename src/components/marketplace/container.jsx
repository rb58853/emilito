import './container.css';
import ProductMarket from '../products/ProductMarket';
import products from "../../data/static_products.js";

function ProductContainer({ items }) {
  let products = Object.values(items).map(item => {
    return <ProductMarket product={item} />
  })

  return <div>
    
    <div className='center_content'>
      <p className='featured_container'> Featured Products</p>
    </div>

    <div className='container'>
      {products}
    </div>
  </div>;
}

export default ProductContainer;
