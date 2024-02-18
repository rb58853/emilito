import './PrincipalBar.css';

const PrincipalBar = () => {
    return (
        <div className="bar">
            <div className="navbar-content">
                <div className="navbar-logo">
                    <a href="/home">
                        <img className="logo_image" src="logo512.png" alt="" />
                    </a>
                </div>
                <a className='login-buttom' href="/login">Log in</a>
            </div>
        </div>
    );
};

export default PrincipalBar;
