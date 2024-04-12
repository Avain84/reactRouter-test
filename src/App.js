import logo from './logo.svg';
import {Routes,Route,Link} from "react-router-dom";
import './App.css';
import MyPage from './components/MyPage.js';
import Home from './components/Home.js';
import About from './components/About.js'
import NotFound from './components/NotFound.js';

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="mypage" element={<MyPage/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
