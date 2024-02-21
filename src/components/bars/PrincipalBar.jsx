import './PrincipalBar.css';

const PrincipalBar = () => {
    return (
        <div className="bar">
            <a href="/login">
                <div className='shop-buttom'>
                    <img className='shop-buttom-image' href="/shop" src="images/icons/shop.png" />
                    <img className='red-point' href="/menu" src="images/icons/red.png" />
                </div>
            </a>
            <button className='menu_buttom'>
                <img className='menu_image' href="/menu" src="images/icons/menu.png" />
            </button>
        </div>
    );
};

export default PrincipalBar;
