import './emptyBag.css'
import './mobile.css'
import { Link } from 'react-router-dom'

export function EmptyBag() {
    return (
        <div className='empty-bag'>
            <text>
                Your bag is empty
            </text>
            <img className="icon-bag-bagView" src={process.env.PUBLIC_URL +"images/icons/shop.png"} alt="" />
            <Link className='button-start-shopping'
                to='/'
            >
                Start shopping
            </Link>
        </div>
    )
}
