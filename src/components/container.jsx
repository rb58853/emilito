import './container.css';
import CardMarket from "./card/CardMarket.jsx";

function Container({items}) {
  let cards = items.map(item => {
    return <CardMarket name={item.card} id ={item.id} price = {item.price}/>
  })
  return <div>
    <div className='container'>
      {cards}
    </div>
  </div>;
}

export default Container;
