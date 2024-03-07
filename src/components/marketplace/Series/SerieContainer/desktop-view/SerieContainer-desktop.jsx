import './style/desktop.css';
import './style/mobile.css';
import SerieMarket from '../../SerieMarketBox/SerieMarket';

function SerieContainerDesktop({ items }) {
  let products = Object.values(items).map(item => {
    return <SerieMarket serie={item} />
  })

  return <div className='desktop-serie-container'>
    <div className='serie_container'>
      {products}
    </div>
  </div>;
}

export default SerieContainerDesktop;
