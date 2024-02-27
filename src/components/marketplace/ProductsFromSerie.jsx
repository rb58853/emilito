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

function SerieButtom({ serie, setSelfItems, setSelfName, setShowDropdown, setSelfSerie }) {
  let serieProducts = serie.products.map(product_key => {
    return products[product_key]
  })

  return (
    <button className='dropdown_item'
      onClick={() => {
        setSelfItems(serieProducts);
        setSelfName(serie.name);
        setShowDropdown(false);
        setSelfSerie(serie);
      }}
    >
      {serie.name}
    </button>
  )
}


/** 
 * @param [Dictionary] serie diccionario de la serie actual
 * @param [events] 3 eventos que seran usados por el boton que se usa en esta funcion.
 * @info recibe una serie para devolver la lista de series(en modo botones) que no coincidan con la misma
**/

function SetAviableSeries(serie, setSelfItems, setSelfName, setShowDropdown, setAviableSeries, setSelfSerie) {

  let all = {
    key: 'all',
    name: "all",
    // image: "images/series/serie1.png",
    products: Object.keys(products).map(key => { return key })
  }

  let aviableSeries = [
    <SerieButtom serie={all} setSelfItems={setSelfItems} setSelfName={setSelfName} setShowDropdown={setShowDropdown} setSelfSerie={setSelfSerie} />
  ]

  Object.values(series).map(selfSerie => {
    return serie.key != selfSerie.key && <SerieButtom serie={selfSerie} setSelfItems={setSelfItems} setSelfName={setSelfName} setShowDropdown={setShowDropdown} setSelfSerie={setSelfSerie} />
  }).forEach(product => {
    aviableSeries.push(product);
  })


  setAviableSeries(aviableSeries);
}

/**
 * @param {Dictionary} serie diccionario que representa una serie
**/
function SerieProducts({ serie }) {
  let serieProducts = serie.products.map(product_key => {
    return products[product_key]
  })

  const [showDropdown, setShowDropdown] = useState(false)
  const [selfName, setSelfName] = useState(serie.name)
  const [selfItems, setSelfItems] = useState(serieProducts)
  const [selfSerie, setSelfSerie] = useState(serie)

  let [aviableSeries, setAviableSeries] = useState(null)


  return (
    <div>
      <div className='serie_select_space'>
        <p className='text_border'>{selfName}</p>
        <div className='dropdown'>

          <button className='dropdown_item'
            onClick={() => {
              showDropdown ? setShowDropdown(false) : setShowDropdown(true);
              SetAviableSeries(selfSerie, setSelfItems, setSelfName, setShowDropdown, setAviableSeries, setSelfSerie)
            }}
          >
            {selfName}
          </button>

          <hr className='line' />
          <div className={`dropdown_options ${showDropdown ? 'show' : ''}`}>
            {aviableSeries}
          </div>
        </div>
      </div>

      <SerieProductsContainer items={selfItems} name={selfName} />
    </div>
  )
}
export default SerieProducts;
