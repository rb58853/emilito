import "./buy.css"
import StepsBuy from "./stepsBuy/StepsBuy"

function BuyBag({ price }) {
    return (
        <div className='box_buy'>
            <StepsBuy />
            <div className='space_full_box_buy'>
                <div className='total_price_space'>
                    <h>{"Total"}</h>
                    <h className='price_buy_box'>{"$" + price}</h>
                </div>
                <a className='continue_shopping_a' href="/">continue shopping</a>
            </div>
            <button className='checkout_buttom' > checkout</button>
        </div>
    )
}
export default BuyBag