import './style/desktop.css';
import './style/mobile.css'
import { Link } from 'react-router-dom'

const BottomBar = () => {
    return (
        <div className="bottom_bar">
            <div>
                <div className='links' >
                    <Link className='about' to="/about"> About </Link>
                    <Link className='terms' to="/terms"> Terms & conditions </Link>
                    <Link className='contact' to="/contact"> Contact </Link>
                </div>
                <p className='copyright'> Copyright © 2024 Emilio Ramos Shop</p>
            </div>
        </div>
    );
};

export default BottomBar;
