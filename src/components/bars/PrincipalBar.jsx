import { useSelector } from 'react-redux';
import './PrincipalBar.css';

const PrincipalBar = () => {
    const bag = useSelector((state) => state.bag)
    return (
        <div className="bar">
            <a href="/bag">
                <div className='shop-buttom'>
                    <img className='shop-buttom-image' href="/shop" src="images/icons/shop.png" />
                    {!bag.empty && <img className='red-point' href="/menu" src="images/icons/red.png" />}
                </div>
            </a>
            <button className='menu_buttom'>
                <img className='menu_image' href="/menu" src="images/icons/menu.png" />
            </button>
        </div>
    );
};

export default PrincipalBar;
