import '../../../../style/style.css'
import './style/desktop.css'
import './style/mobile.css'
import InformationPayment from './information/information-pyment'
import BoxBuyPayment from './boxBuy/boxBuyPament'

function PaymentBagView() {
    return (
        <section className="bag-payment-section" >
            <text className="header-text">
                Payment
            </text>
            <div className='bag-payment'>
                <InformationPayment />
                <BoxBuyPayment />
            </div>
        </section>
    )
}

export default PaymentBagView