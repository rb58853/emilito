import './App.css';
import FullContainer from './components/fullContainer/FullContainer';
import TopBars from './components/bars/topBars/TopBars';
import BottomBar from './components/bars/bottomBar/BottomBar';
import './components/utils/basic.css'

function App({ content }) {
  return (
    <div className="App">
      <TopBars />
      <FullContainer content={content} />
      <BottomBar />
    </div>
  );
}

export default App;
