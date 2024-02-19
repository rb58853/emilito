import './container.css';
import ProductMarket from '../products/ProductMarket';
import SerieMarket from '../products/SerieMarket';

function SerieContainer({ items }) {
  let products = Object.values(items).map(item => {
    return <SerieMarket serie={item} />
  })

  return <div>
    
    <div className='center_content'>
      {/* <p className='featured_container'> Series</p> */}
    </div>

    <div className='container'>
      {products}
    </div>
  </div>;
}

export default SerieContainer;
