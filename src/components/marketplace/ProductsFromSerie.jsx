import './container.css';
import ProductMarket from '../products/ProductMarket';
import "./ProductsFromSerie.css"
import React, { useState } from 'react';

function SerieProducts({items, name}) {
  let products = Object.values(items).map(item => {
    return <ProductMarket product={item} />
  })
  const [showDropdown, setShowDropdown] = useState(false)


  return <div>
    <div className='serie_select_space'>
      <p className='text_border'>{name}</p>
      <div className='dropdown'>

        <button className='dropdown_item'
          onClick={() => {
            showDropdown ? setShowDropdown(false) : setShowDropdown(true)
          }}
        >
          {name}
        </button>

        <hr className='line' />
        <div className={`dropdown_options ${showDropdown ? 'show' : ''}`}>
          <button className='dropdown_item'
            onClick={() => {
              return <p>test</p>
            }}>
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
          <button className='dropdown_item'>
            serie5
          </button>
          <button className='dropdown_item'>
            serie6
          </button>

        </div>
      </div>

    </div>
    <div className='container_products_serie'>
      {products}
    </div>
  </div>;
}

// function SerieProducts({ items, name }) {
//   return (
//       <SerieProductsContainer items={items} name={name} />
//   )
// }
export default SerieProducts;
