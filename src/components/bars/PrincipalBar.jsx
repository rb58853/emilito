import './PrincipalBar.css';

const PrincipalBar = () => {
    return (
        <div className="bar">
            <a href="/login">
                <div className='shop-buttom'>
                    <img  href="/menu" src="logo192.png" />
                    <img className='red-point' href="/menu" src="logo192.png" />
                </div>
            </a>
            <a href="/menu">
                <img className='menu_buttom' href="/menu" src="logo192.png" />
            </a>
        </div>
    );
};

export default PrincipalBar;
