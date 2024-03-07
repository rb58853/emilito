import './style/desktop.css';
import './style/mobile.css';
import './style/effects.css'
import SerieMarket from '../../SerieMarketBox/SerieMarket';
import { useEffect, useRef, useState } from 'react';

let [currentSerie, setCurrentSerie] = [null, null]
let [lastSerie, setLastSerie] = [null, null]

function ChangeSerieFade(index) {
  var currentSerieComponent = document.getElementById('current-serie')
  var lastSerieComponent = document.getElementById('last-serie')

  currentSerieComponent.addEventListener('animationend', function () {
    this.classList.remove('fade_in');
  })
  currentSerieComponent.classList.add('fade_in')
  lastSerieComponent.addEventListener('animationend', function () {
    this.classList.remove('fade_out');
  })

  lastSerieComponent.classList.add('fade_out')
  setLastSerie(currentSerie)
  setCurrentSerie(index)
}

function ChangeSerie(index) {
  setCurrentSerie(index)
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

function SerieContainerMobile({ items }) {
  [currentSerie, setCurrentSerie] = useState(0);
  [lastSerie, setLastSerie] = useState(0);


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
    if (component)
      component.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [currentSerie])


  return <div className='serie-container-mobile'>
    <div className='box-serie-container-mobile'>
      <div ref={seriesRef} className='box-serie-mobile' id='current-serie'>
        {series}
      </div>

      {/* <div className='box-serie-mobile-hide' id='last-serie'>
        {series[lastSerie]}
      </div> */}

      <button className='right-button'
        onClick={() => ChangeSerie((currentSerie + 1) % series.length)}>
        {"❱"}
      </button>
      <button className='left-button'
        onClick={() => {
          if (currentSerie > 0)
            ChangeSerie(currentSerie - 1)
          else
            ChangeSerie(series.length - 1)
        }} >

        {"❰"}
      </button>

    </div>

    <div className='points-space'>
      {points}
    </div>

  </div>;
}

export default SerieContainerMobile;
