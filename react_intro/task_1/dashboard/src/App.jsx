import holberton_logo from './holberton_logo.jpg';
import './App.css';

function App() {
  return (
    <>
    <header className="App-header">
      <img src={holberton_logo} alt="logo"/>
      <h1>School dashboard</h1>
    </header>

    <body className="App-body">
        <p>Login to access the full dashboard</p>
    </body>
    <footer className="App-footer"><p>Copyright 2020 - holberton School</p></footer>
    </>);
}

export default App;