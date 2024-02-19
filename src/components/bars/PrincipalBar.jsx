import './PrincipalBar.css';

const PrincipalBar = () => {
    return (
        <div className="bar">
            <a href="/login">
                <div className='shop-buttom'>
                    <img  href="/shop" src="images/icons/shop.png" />
                    <img className='red-point' href="/menu" src="images/icons/red.png" />
                </div>
            </a>
            <a href="/menu">
                <img className='menu_buttom' href="/menu" src="images/icons/menu.png" />
            </a>
        </div>
    );
};

export default PrincipalBar;
