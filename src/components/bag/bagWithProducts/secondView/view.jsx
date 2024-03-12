import BuyBox2 from "./buyBox/buyBox2";
import Information from "./information/information";
import './style/desktop.css'

function BagSecondView() {
    return (
        <div className='bag-details'>
            <Information/>
            <BuyBox2/>
        </div>
    )
}

export default BagSecondView