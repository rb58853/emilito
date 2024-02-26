import './container.css';
import ProductMarket from '../products/ProductMarket';
import "./ProductsFromSerie.css"

function SerieProducts({ items, name }) {
  let products = Object.values(items).map(item => {
    return <ProductMarket product={item} />
  })
  return <div>
    <div className='serie_select_space'>
      <p className='text_border'>{name}</p>
      <div className='dropdown'>
        <div className='dropdown_options'>
          <button className='dropdown_item'>
            serie1
          </button>
          <button className='dropdown_item'>
            serie2
          </button>
          <button className='dropdown_item'>
            serie3
          </button>
          <button className='dropdown_item'>
            serie4
          </button>
        </div>

      </div>
      La parte del seleccionar la serie y to esa talla
    </div>
    <div className='container_products_serie'>
      {products}
    </div>
  </div>;
}

export default SerieProducts;
