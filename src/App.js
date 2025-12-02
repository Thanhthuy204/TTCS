import React from 'react';  
import Header from './components/Header/Header.js';
import {Outlet, Link } from 'react-router-dom';
import { Button } from 'bootstrap';
import './App.scss'
import Footer from './components/Footer/Footer.js';
import { ToastContainer, Bounce } from 'react-toastify';

const App = () => {
  return (
   
    <div className="app-container">
      <div>
        
      </div>
      <div className='header-container'>
      <Header />
      </div>

      <div className='main-container'>
        <div className='sideNav-container'>

      </div>
      <div className='app-content'>
        <Outlet />
      </div>
      </div>
      <div className='footer-container'>
          <Footer/>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      
    </div>
    
  );
}

export default App;
