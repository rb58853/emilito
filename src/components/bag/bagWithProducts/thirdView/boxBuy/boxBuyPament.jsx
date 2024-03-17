import { useSelector } from "react-redux";
import StepsBuy from '../../stepsBuy/StepsBuy'
import { Link } from "react-router-dom";
import '../../secondView/style/desktop.css'
import './style/desktop.css'

function DesktopBuyBox({ subtotal }) {
    return (
        <div className="buy-box-2 buy-box-2-desktop">
            <StepsBuy step={2} />
            <Link className='order-sumary-button'
                to=''
            >
                Order Sumary
            </Link>
            <div className='pays-cost-space'>
                <div className='row-cost'>
                    Subtotal:
                    <text>
                        {"$" + subtotal}
                    </text>
                </div>
                <div className='row-cost'>
                    Shipping:
                    <text>
                        {"$0"}
                    </text>
                </div>
                <div className='row-cost'>
                    Tax:
                    <text>
                        {"$0"}
                    </text>
                </div>
            </div>
            <div className='total-cost-row'>
                <div>
                    Total:
                    <text>
                        {"$" + subtotal}
                    </text>
                </div>
            </div>
            <button className="paynow-button">
                Pay Now
            </button>
        </div>
    )
}
function BoxBuyPayment() {
    let subtotal = 0
    const bag = useSelector((state) => state.bag)
    Object.values(bag.products).forEach(item => {
        subtotal += parseFloat(item["product"].price) * parseInt(item["count"]);
    })
    subtotal = subtotal.toFixed(2)

    return (
        <section className='full'>
            <DesktopBuyBox subtotal={subtotal} />
            {/* <MobileBuyBox subtotal={subtotal} /> */}
        </section>
    )
}
export default BoxBuyPayment