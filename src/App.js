import './App.css';
import TicTacToe from './components/TicTacToe';
import B from './components/B';
import C from './components/C';
import Delete from './components/Delete';
import Home from './components/Home';
import CollectDaruma from './components/darumagame/CollectDaruma';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
        </header>
        <ul>
          <li><Link to="/">home</Link></li>
          <li><Link to="/TicTacToe">TicTacToe</Link></li>
          <li><Link to="/B">B</Link></li>
          <li><Link to="/C">C</Link></li>
          <li><Link to="/CollectDaruma">だるまあつめ</Link></li>
          <li><Link to="/Delete">Delete</Link></li>
        </ul>
      </div>
      <Routes>
        <Route exact path="/" element={ <Home />} />
        <Route exact path="/TicTacToe" element={ <TicTacToe /> } /> 
        <Route exact path="/B" element={ <B /> } />
        <Route exact path="/C" element={ <C /> } />
        <Route exact path="/CollectDaruma" element={ <CollectDaruma />} />
        <Route path="*" element={<Delete />} />
      </Routes>
    </>
  );
}

export default App;