import React from 'react';
import ReactDOM from 'react-dom/client';
import {X} from './Notifications';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Login from './Login/Login';
import App from './App/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>  
    {/* <Header/>
    <X/>
    <Footer/>
    <Login/> */}
    <App/>
  </>
);
