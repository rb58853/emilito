import BuyBox2 from "./buyBox/buyBox2";
import Information from "./information/information";
import './style/desktop.css'
import './../../../../style/style.css'

function BagSecondView() {
    return (
        <section className="bag-details-section" >
            <text className="header-text">
                Contact information
            </text>
            <div className='bag-details'>
                <Information />
                <BuyBox2 />
            </div>
        </section>
    )
}

export default BagSecondView