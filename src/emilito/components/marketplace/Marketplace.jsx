import my_items from "../../../data/static_items.js"
import Container from "./container.jsx";

function Marketplace() {
  return <div>
    <h1>MARKETPLACE</h1>
    <Container items = {my_items}/>
    {/* <CardView name = {my_items[0].card} price = {my_items[0].price} id = {my_items[0].id} /> */}
  </div>;
}

export default Marketplace;
