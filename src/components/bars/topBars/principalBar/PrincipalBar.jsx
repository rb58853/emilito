import { useSelector } from 'react-redux';
import './PrincipalBar.css';
import { Menu } from './menu/menu';
import { useState } from 'react';

const PrincipalBar = () => {
    const bag = useSelector((state) => state.bag)
    const [showMenu, setShowMenu] = useState(false)

    return (
        <div className="bar">
            <a href="/bag">
                <div className='shop-buttom'>
                    <img className='shop-buttom-image' href="/shop" src="images/icons/shop.png" />
                    {!bag.empty && <img className='red-point' href="/menu" src="images/icons/red.png" />}
                </div>
            </a>
            <button
                className='menu_buttom'
                onClick={() => { setShowMenu(true) }}
            >
                <img className='menu_image' href="/menu" src="images/icons/menu.png" />
            </button>
            
            <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
        </div>
    );
};

export default PrincipalBar;
