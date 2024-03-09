import "./buy.css"
import "./mobile.css"
import StepsBuy from "./stepsBuy/StepsBuy"

function BuyMobile({ price }) {
    return (
        <div className="buy-mobile">
            <div className='box_buy'>
                <div className="box_buy-background">
                    <div className='space_full_box_buy'>
                        <div className='total_price_space'>
                            <h>{"Total:"}</h>
                            <h className='price_buy_box'>{"$" + price}</h>
                        </div>
                        <button className='checkout_buttom' > Checkout</button>
                        <a className='continue_shopping_a' href="/">continue shopping</a>
                    </div>
                </div>
                <StepsBuy />
            </div>
        </div>
    )

}
function BuyDesktop({ price }) {
    return (
        <div className="buy-desktop">
            <div className='box_buy'>
                <StepsBuy />
                <div className='space_full_box_buy'>
                    <div className='total_price_space'>
                        <h>{"Total:"}</h>
                        <h className='price_buy_box'>{"$" + price}</h>
                    </div>
                    <a className='continue_shopping_a' href="/">continue shopping</a>
                </div>
                <button className='checkout_buttom' > Checkout</button>
            </div>
        </div>
    )
}
function BuyBag({ price }) {
    return (
        <div className="buy-bag">
            <BuyDesktop price={price} />
            <BuyMobile price={price} />
        </div>
    );
}
export default BuyBag