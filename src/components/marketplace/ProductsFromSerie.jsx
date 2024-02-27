import './container.css';
import ProductMarket from '../products/ProductMarket';
import "./ProductsFromSerie.css"
import React, { useState } from 'react';
import series from "../../data/static_series.js";
import products from "../../data/static_products.js"

function SerieProductsContainer({ items, name }) {
  let products = Object.values(items).map(item => {
    return <ProductMarket product={item} />
  })
  return (
    <div className='container_products_serie'>
      {products}
    </div>
  );
}

function SerieProducts({ items, name }) {
  const [showDropdown, setShowDropdown] = useState(false)
  const [selfName, setSelfName] = useState(name)
  const [selfItems, setSelfItems] = useState(items)

  return (
    <div>
      <div className='serie_select_space'>
        <p className='text_border'>{selfName}</p>
        <div className='dropdown'>

          <button className='dropdown_item'
            onClick={() => {
              showDropdown ? setShowDropdown(false) : setShowDropdown(true)
            }}
          >
            {selfName}
          </button>

          <hr className='line' />
          <div className={`dropdown_options ${showDropdown ? 'show' : ''}`}>
          
            <button className='dropdown_item'
              onClick={() => {
                setSelfItems({ 'p1': products['p1'], 'p4': products['p4'] });
                setSelfName('test')
              }}
            >
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

      <SerieProductsContainer items={selfItems} name={selfName} />
    </div>
  )
}
export default SerieProducts;
