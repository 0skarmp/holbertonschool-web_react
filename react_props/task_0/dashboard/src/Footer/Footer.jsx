import React from "react";
import getFullYear, { getFootCopy } from '../utils';
import './Footer.css'

function Footer() {
  return (
    <>
       

      
      <footer className="App-footer"><p>Copyright {getFullYear()} - {getFootCopy("isIndex")}</p></footer>
      </>);
}

      export default Footer;
