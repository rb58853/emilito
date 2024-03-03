import './menu.css'

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
                <a href="/shop">
                    Shop
                </a>
                <a href="/about">
                    About
                </a>
                <a href="/terms">
                    Terms & conditions
                </a>
                <a href="/contact">
                    Contact
                </a>
            </section>
        </div>
        <div className={`menu-background ${showMenu? 'active':''}`}></div>
    </section>
}