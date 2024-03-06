import './App.css';
import FullContainer from './components/fullContainer/FullContainer';
import TopBars from './components/bars/topBars/TopBars';
import BottomBars from './components/bars/bottomBars/View/bottomBars.jsx';
import './components/utils/basic.css'

function App({ content }) {
  return (
    <div className="App">
      <TopBars />
      <FullContainer content={content} />
      <BottomBars />
    </div>
  );
}

export default App;
