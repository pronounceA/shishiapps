import { useState } from 'react';
import './App.css';
import TicTacToe from './pages/TicTacToe';
import B from './pages/B';
import C from './pages/C';
import Delete from './pages/Delete';
import Home from './components/Home';
import CollectDaruma from './pages/CollectDaruma';
import { Routes, Route, Link } from 'react-router-dom';

function App() {    

  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="App">
        <header className="App-header">
        </header>
        <div className='left'></div>
        <button class="hamburger" onClick={() => setOpen(!isOpen)}>
          <span class="hamburger_bar"></span>
          <span class="hamburger_bar"></span>
          <span class="hamburger_bar"></span>
        </button>
        <ul className={isOpen ? 'hamburger-menu open' : 'hamburger-menu'}>
          <li className='menu-list' onClick={() => setOpen(false)}><Link to="/">home</Link></li>
          <li className='menu-list' onClick={() => setOpen(false)}><Link to="/TicTacToe">TicTacToe</Link></li>
          <li className='menu-list' onClick={() => setOpen(false)}><Link to="/B">B</Link></li>
          <li className='menu-list' onClick={() => setOpen(false)}><Link to="/C">C</Link></li>
          <li className='menu-list' onClick={() => setOpen(false)}><Link to="/CollectDaruma">だるまあつめ</Link></li>
          <li className='menu-list' onClick={() => setOpen(false)}><Link to="/Delete">Delete</Link></li>
        </ul>
      </div>
      <div className='pages'>
        <Routes>
          <Route exact path="/" element={ <Home />} />
          <Route exact path="/TicTacToe" element={ <TicTacToe /> } /> 
          <Route exact path="/B" element={ <B /> } />
          <Route exact path="/C" element={ <C /> } />
          <Route exact path="/CollectDaruma" element={ <CollectDaruma />} />
          <Route path="*" element={<Delete />} />
        </Routes>
      </div>
    </>
  );
}

export default App;