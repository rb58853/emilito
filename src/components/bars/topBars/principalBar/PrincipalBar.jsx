import './style/desktop.css';
import './style/mobile.css';
import { useSelector } from 'react-redux';
import { Menu } from './menu/menu';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const PrincipalBar = () => {
    const bag = useSelector((state) => state.bag)
    const [showMenu, setShowMenu] = useState(false)

    return (
        <div className="bar">
            <Link to="/bag">
                <div className='shop-buttom'>
                    <img className='shop-buttom-image' to="/shop" src={process.env.PUBLIC_URL + "//images/icons/shop.png"} />
                    {!bag.empty && <img className='red-point' to="/menu" src={process.env.PUBLIC_URL + "//images/icons/red.png"} />}
                </div>
            </Link>
            <button
                className='menu_buttom'
                onClick={() => { setShowMenu(true) }}
            >
                <img className='menu_image' to="/menu" src={process.env.PUBLIC_URL + "//images/icons/menu.png"} />
            </button>

            <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
        </div>
    );
};

export default PrincipalBar;
