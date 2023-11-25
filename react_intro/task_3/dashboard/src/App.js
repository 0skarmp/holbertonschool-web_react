import holberton_logo from './holberton_logo.jpg';
import {getFullYear,  getFooterCopy } from './utils';
import './App.css';


function App() {
  return (
    <>
      <header className="App-header">
        <img src={holberton_logo} alt="logo" />
        <h1>School dashboard</h1>
      </header>

      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor='email'>email: </label>
        <input type='email'></input>
        <label htmlFor='password'>password: </label>
        <input type='password'></input>
        <button>ok</button>

      </div>
      <footer className="App-footer"><p>Copyright {getFullYear()} - {getFooterCopy("isIndex")}</p></footer>
    </>);
}

export default App;