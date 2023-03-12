import './App.css';
import Background from './assets/background';

function App() {
  return (
    <div className="App">
      <Background/>
      <header className="App-header">
        <a>Click 👇 to know </a>
        <a
          className="App-link"
          href="https://linktr.ee/SahilUmeshBhandari"
          target="_self"
        >
          About Me
        </a>
        <a
          className="App-link"
          href="https://drive.google.com/file/d/17lEXXo8KHI_zRlFckyCg5Q2LUFczUlEq/view?usp=share_link"
          target="_self"
        >
          My Resume
        </a>
      </header>
    </div>
  );
}

export default App;
