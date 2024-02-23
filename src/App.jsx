import './App.css';
import FullContainer from './components/FullContainer';
import TopBars from './components/bars/TopBars';
import BottomBar from './components/bars/BottomBar';

function App() {
  return <div className="App">
    <TopBars />
    <FullContainer />

    <BottomBar />
  </div>;
}

export default App;
