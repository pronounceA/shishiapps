import * as React from 'react';
import './App.css';
import TicTacToe from './pages/TicTacToe';
import Delete from './pages/Delete';
import Home from './pages/Home';
import OverWatch from './pages/OverWatch';
import CollectDaruma from './pages/CollectDaruma';
import Test from './pages/Test';

import { Routes, Route, Link } from 'react-router-dom';

function App() {

  /*
  //メニューの開閉を管理。
  */
  const [isOpen, setOpen] = React.useState(false);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <div className='left'></div>
          <button className="hamburger" onClick={() => setOpen(!isOpen)}>
            <span className="hamburger_bar"></span>
            <span className="hamburger_bar"></span>
            <span className="hamburger_bar"></span>
          </button>
          <ul className={isOpen ? 'hamburger-menu open' : 'hamburger-menu'}>
            <li className='menu-list' onClick={() => setOpen(false)}><Link to="/">home</Link></li>
            <li className='menu-list' onClick={() => setOpen(false)}><Link to="/TicTacToe">TicTacToe</Link></li>
            <li className='menu-list' onClick={() => setOpen(false)}><Link to="/CollectDaruma">だるまあつめ</Link></li>
            {/* <li className='menu-list' onClick={() => setOpen(false)}><Link to="/Test">テスト用ページ</Link></li> */}
          </ul>
        </header>
      </div>
      <div className='pages'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/TicTacToe" element={<TicTacToe />} />
          <Route path="/CollectDaruma" element={<CollectDaruma />} />
          <Route path="/ow2" element={<OverWatch />}></Route>
          <Route path="/Test" element={<Test />}></Route>
          <Route path="*" element={<Delete />} ></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;