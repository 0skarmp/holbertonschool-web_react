import React from 'react';
import  holberton_logo from '../holberton_logo.jpg';
import './Header.css';


function Header() {
  return (
    <>
    <header className="App-header">
      <img src={holberton_logo} alt="logo" />
      <h1>School dashboard</h1>
    </header>
    </>
  )
};
export default Header;