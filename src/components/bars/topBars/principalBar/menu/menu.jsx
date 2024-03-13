import './menu.css'
import './mobile.css'
import { Link } from 'react-router-dom'

export function Menu({ showMenu, setShowMenu }) {
    return <section>

        <div className={`menu ${showMenu ? 'show' : ''}`}>
            <button className='close-menu'
                onClick={() => setShowMenu(false)}
            >
                <img
                    className='close-image'
                    src="images/icons/close1.png" alt="" />
            </button>

            <section className='menu-refs'>
                <Link to="/shop"
                    onClick={() => setShowMenu(false)}
                >
                    Shop
                </Link>
                <Link to="/about"
                    onClick={() => setShowMenu(false)}
                >
                    About
                </Link>
                <Link to="/terms"
                    onClick={() => setShowMenu(false)}
                >
                    Terms & conditions
                </Link>
                <Link to="/contact"
                    onClick={() => setShowMenu(false)}
                >
                    Contact
                </Link>
            </section>
        </div>
        <div className={`menu-background ${showMenu ? 'active' : ''}`}></div>
    </section>
}