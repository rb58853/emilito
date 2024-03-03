import './container.css';
import './mobile.css'
import ProductMarket from '../../products/ProductMarket.jsx';

function ProductContainer({ items }) {
  let products = Object.values(items).map(item => {
    return <ProductMarket product={item} />
  })

  return <div className='container'>
    {products}
  </div>
}

export default ProductContainer;
