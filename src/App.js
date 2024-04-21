import { useState } from 'react';
import './App.css';
import TicTacToe from './pages/TicTacToe';
import Delete from './pages/Delete';
import Home from './pages/Home';
import OverWatch from './pages/OverWatch';
import CollectDaruma from './pages/CollectDaruma';

import { Routes, Route, Link } from 'react-router-dom';

function App() {

  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <div className='left'></div>
          <button class="hamburger" onClick={() => setOpen(!isOpen)}>
            <span class="hamburger_bar"></span>
            <span class="hamburger_bar"></span>
            <span class="hamburger_bar"></span>
          </button>
          <ul className={isOpen ? 'hamburger-menu open' : 'hamburger-menu'}>
            <li className='menu-list' onClick={() => setOpen(false)}><Link to="/">home</Link></li>
            <li className='menu-list' onClick={() => setOpen(false)}><Link to="/TicTacToe">TicTacToe</Link></li>
            <li className='menu-list' onClick={() => setOpen(false)}><Link to="/CollectDaruma">だるまあつめ</Link></li>
          </ul>
        </header>
      </div>
      <div className='pages'>
        <Routes>
          <Route exact path="/" element={ <Home />} />
          <Route exact path="/TicTacToe" element={ <TicTacToe /> } /> 
          <Route exact path="/CollectDaruma" element={ <CollectDaruma />} />
          <Route exact path="/ow2" element={ <OverWatch />}></Route>
          <Route path="*" element={<Delete />} />
        </Routes>
      </div>
    </>
  );
}

export default App;