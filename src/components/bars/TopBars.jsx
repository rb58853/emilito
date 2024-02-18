import './TopBars.css'
import NavBar from './NavBar.jsx';
import PrincipalBar from './PrincipalBar.jsx';

function TopBars() {
    return <div className="App">
        <div className='top_bars'>
            <PrincipalBar />
            <NavBar />
        </div>
    </div>;
}
export default TopBars;
