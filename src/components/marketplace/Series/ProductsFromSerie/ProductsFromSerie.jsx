import "./ProductsFromSerie.css"
import React, { useState } from 'react';
import series from "../../../../data/static_series.js";
import products from "../../../../data/static_products.js"
import ProductContainer from '../../Products/ProductContainer.jsx';
import { Link } from "react-router-dom";

function SerieButtom({ serie, setShowDropdown }) {
  // let serieProducts = serie.products.map(product_key => {
  //   return products[product_key]
  // })

  return (
    <Link className='dropdown_item'
      to={"/serie-" + serie.key}
      onClick={() => {
        setShowDropdown(false);
      }}
    >
      {serie.name}
    </Link>
  )
}


/** 
 * @param [Dictionary] serie diccionario de la serie actual
 * @param [events] 3 eventos que seran usados por el boton que se usa en esta funcion.
 * @info recibe una serie para devolver la lista de series(en modo botones) que no coincidan con la misma
**/

function AviableSeries({ serie, setShowDropdown }) {

  let all = {
    key: 'all',
    name: "all",
    // image: "images/series/serie1.png",
    products: Object.keys(products).map(key => { return key })
  }

  let aviableSeries = [
    serie.key != 'all' && <SerieButtom serie={all} setShowDropdown={setShowDropdown} />
  ]

  Object.values(series).map(serieItem => {
    return serie.key != serieItem.key && <SerieButtom serie={serieItem} setShowDropdown={setShowDropdown} />
  }).forEach(product => {
    aviableSeries.push(product);
  })

  return aviableSeries;
}

/**
 * @param {Dictionary} serie diccionario que representa una serie
**/
function SerieProducts({ serie }) {
  let serieProducts = serie.products.map(product_key => {
    return products[product_key]
  })

  const [showDropdown, setShowDropdown] = useState(false)
  let name = serie.name

  return (
    <div>
      <div className='serie_select_space'>
        <p className='text_border'>{name}</p>
        <div className='dropdown'>

          <button className='dropdown_item'
            onClick={() => {
              showDropdown ? setShowDropdown(false) : setShowDropdown(true);
            }}
          >
            {name}
          </button>

          <hr className='line' />
          <div className={`dropdown_options ${showDropdown ? 'show' : ''}`}>
            <AviableSeries serie={serie} setShowDropdown={setShowDropdown} />
          </div>
        </div>
      </div>

      <ProductContainer items={serieProducts} name={name} />
    </div>
  )
}
export default SerieProducts;
