import './App.css';
import FullContainer from './components/fullContainer/FullContainer';
import TopBars from './components/bars/topBars/TopBars';
import BottomBars from './components/bars/bottomBars/View/bottomBars.jsx';
import './components/utils/basic.css'
import ScrollToTop from './components/utils/scrollToTop.jsx';

function App({ content }) {
  return (
    <div className="App">
      <ScrollToTop/>
        <TopBars />
        <FullContainer content={content} />
        <BottomBars />
    </div>
  );
}

export default App;
