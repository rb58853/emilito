import './style/desktop.css';
import './style/mobile.css';
import './style/effects.css'
import SerieMarket from '../../SerieMarketBox/SerieMarket';
import { useEffect, useRef, useState } from 'react';

let [currentSerie, setCurrentSerie] = [null, null]
let [lastDeltaX, setLastDeltaX] = [null, null];

function ChangeSerie(index) {
  // setCurrentSerie(index)
}

function Next(series) {
  // ChangeSerie((currentSerie + 1) % series.length)
  if (currentSerie < series.length - 1)
    ChangeSerie((currentSerie + 1) % series.length)
}

function Back(series) {
  if (currentSerie > 0)
    ChangeSerie(currentSerie - 1)
  // else
  //   ChangeSerie(series.length - 1)
}

function Point({ index }) {
  return (
    <div>
      <img
        onClick={() => ChangeSerie(index)}

        className={`point ${(index == currentSerie) ? 'highlight' : ""}`}

        src={(index == currentSerie) ? "images/icons/Black_Circle.png" : "images/icons/White_Circle.png"} alt="" />
    </div>
  )
}

function ChangeSerieWithScroll(e, series) {
  if (e.currentTarget.scrollLeft > lastDeltaX)
    Next(series)

  if (e.currentTarget.scrollLeft < lastDeltaX)
    Back(series)
}

function SerieContainerMobile({ items }) {
  [currentSerie, setCurrentSerie] = useState(0);
  [lastDeltaX, setLastDeltaX] = useState(0);

  const seriesRef = useRef()
  let series = Object.values(items).map((item, index) => {
    return <li className='li-serie' key={index}>
      <SerieMarket serie={item} />
    </li>
  });

  let points = Array.from({ length: series.length }, (_, i) =>
    <Point index={i} />)

  useEffect(() => {
    const component = seriesRef.current.querySelectorAll('li')[currentSerie];

    if (component) {
      const container = component.parentNode;
      const componentRect = component.getBoundingClientRect();
      //Se usa +10 ya que el contenedor flex tiene gap = 10px
      const offsetLeft = (componentRect.width + 10) * currentSerie;
      container.scrollTo({
        left: offsetLeft,
        behavior: 'smooth'
      });
    }
  }, [currentSerie])


  return <div className='serie-container-mobile'>
    <div className='box-serie-container-mobile'>
      <div
        className='box-serie-mobile'
        ref={seriesRef}

        onTouchStart={(e) => { setLastDeltaX(e.currentTarget.scrollLeft) }}
        onTouchEnd={(e) => { ChangeSerieWithScroll(e, series) }}
      >
        {series}
      </div>

      {/* <button className='right-button'
        onClick={() => Next(series)}
      >
        {"❱"}
      </button>
      <button className='left-button'
        onClick={() => {
          Back(series)
        }} >

        {"❰"}
      </button> */}

    </div>

    <div className='points-space'>
      {points}
    </div>

  </div >;
}

export default SerieContainerMobile;
