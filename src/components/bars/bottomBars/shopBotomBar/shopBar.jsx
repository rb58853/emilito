import { Link } from 'react-router-dom'
import './style/desktop.css'
import './style/mobile.css'
import { useSelector } from 'react-redux'

function ShopBar() {
    const bag = useSelector((state) => state.bag)

    return (
        <div className="shop-bar-space">
            <div className='line-bottom-bar' />
            <div className="shop-bar">
                <Link to="/bag">
                    <div className='shop-button-bottom-bar'>
                        <img className='shop-image-bottom-bar' src="images/icons/shop.png" />
                        {!bag.empty && <img className='red-point-bottom-bar' src="images/icons/red.png" />}
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default ShopBar