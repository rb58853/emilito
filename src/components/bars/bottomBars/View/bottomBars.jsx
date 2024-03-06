import './style/desktop.css'
import './style/mobile.css'
import BottomBar from '../PricipalButtomBar/BottomBar'
import ShopBar from '../shopBotomBar/shopBar'

function BottomBars(){
    return(
        <div className="bottom-bars">
            <BottomBar/>
            <ShopBar/>
        </div>
    )
}
export default BottomBars