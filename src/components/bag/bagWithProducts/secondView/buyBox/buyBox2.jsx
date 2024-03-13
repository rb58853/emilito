import { useSelector } from 'react-redux'
import StepsBuy from '../../stepsBuy/StepsBuy'
import './style/desktop.css'
import './style/mobile.css'

function BuyBox2() {
    let subtotal = 0
    const bag = useSelector((state) => state.bag)
    Object.values(bag.products).forEach(item => {
        subtotal += parseFloat(item["product"].price) * parseInt(item["count"]);
    })
    subtotal = subtotal.toFixed(2)

    return (
        <div className="buy-box-2">
            <StepsBuy step={1} />
            <a className='order-sumary-button'
                href=''
            >
                Order Sumary
            </a>
            <div className='notes'>
                <div>
                    <text>
                        Notes or instructions (optional)
                    </text>
                    <input className="input-notes"
                        type="text" />
                </div>
            </div>
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
        </div>
    )
}
export default BuyBox2