import './App.css';
import Marketplace from './components/marketplace/Marketplace';
import TopBars from './components/bars/TopBars';
import BottomBar from './components/bars/BottomBar';

function App() {
  return <div className="App">
    <TopBars/>
    <Marketplace/>
    <BottomBar/>
  </div>;
}

export default App;
