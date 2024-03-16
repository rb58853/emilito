import '../../../../style/style.css'
import './style/desktop.css'
import InformationPayment from './information/information-pyment'

function PaymentBagView() {
    return (
        <section className="bag-payment-section" >
            <text className="header-text">
                Payment
            </text>
            <div className='bag-payment'>
                <InformationPayment/>
            </div>
        </section>
    )
}

export default PaymentBagView