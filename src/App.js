import './App.css';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './HomePage';
import Signin from './Signin';
function App() {
  return (
    <div className="App">
      <nav>
        <a href="#"><h1>Contextor</h1></a>
        <ul class="list">
          <BrowserRouter>
            <li><Link to='/Signin'>About</Link></li>
            <li><Link to='/Signin'>Projects</Link></li>
            <li><Link to='/Signin'>Login</Link></li>
          </BrowserRouter>
        </ul>
      </nav>
       <></>
      <BrowserRouter>
        <Routes>

          <Route path='/home' element={< HomePage />}></Route>
          <Route path='/Signin' element={< Signin />}></Route>
        </Routes>
      </BrowserRouter>
      <br />
    </div>
  );
}

export default App;
