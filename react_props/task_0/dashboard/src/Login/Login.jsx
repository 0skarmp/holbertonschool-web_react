import React from 'react';
import './Login.css'


function Login() {
  return (
    <>
        <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor='email'>email: </label>
        <input type='email'></input>
        <label htmlFor='password'>password: </label>
        <input type='password'></input>
        <button>ok</button>

      </div>
    
      </>);
}

      export default Login;