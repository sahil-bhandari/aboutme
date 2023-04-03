import './App.css';
import Background from './components/background';
import Intro from './components/intro';

function App() {
  return (
    <div className="App">
      <Background/>
      <header className="App-header">
        <Intro/>
      </header>
    </div>
  );
}

export default App;
