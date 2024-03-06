import './style/desktop.css';
import './style/mobile.css'

const BottomBar = () => {
    return (
        <div className="bottom_bar">
            <div>
                <div className='links' >
                    <a className='about' href="/about"> About </a>
                    <a className='terms' href="/contact"> Terms & conditions </a>
                    <a className='contact' href="/contact"> Contact </a>
                </div>
                <p className='copyright'> Copyright C 2024 Emilio Ramos Shop</p>
            </div>
        </div>
    );
};

export default BottomBar;
