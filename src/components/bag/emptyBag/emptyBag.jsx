import './emptyBag.css'
import './mobile.css'
export function EmptyBag() {
    return (
        <div className='empty-bag'>
            <text>
                Your bag is empty
            </text>
            <img className="icon-bag-bagView" src="images/icons/shop.png" alt="" />
            <a className='button-start-shopping'
                href='/'
            >
                Start shopping
            </a>
        </div>
    )
}
