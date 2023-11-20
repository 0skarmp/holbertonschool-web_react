import holberton_logo from './holberton_logo.jpg';
import getFullYear, { getFootCopy } from './utils';
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
        <label htmlFor='email'>Email : </label>
        <input type='email'  id="email" autoComplete="on"></input>
        <label htmlFor='password'>Password: </label>
        <input type='password' id="password" autoComplete="on"></input>
        <button>ok</button>

      </div>
      <footer className="App-footer"><p>Copyright {getFullYear()} - {getFootCopy("isIndex")}</p></footer>
      </>);
}

      export default App;
