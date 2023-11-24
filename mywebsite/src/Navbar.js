import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav>
        <div id='topLeft'>
          <div><a href="/">Home</a></div>
          <div><a href="/about">About</a></div>
          <div><a href="/contact">Contact</a></div>
        </div>
        <div id='name'>
          <p>Xingrui Zhu</p>
        </div>
        <div id='topRight'>
          <div><a href="/Github">Github</a></div>
          <div><a href="/Linkedin">Linkedin</a></div>
          <div><a href="/contact">Email</a></div>
        </div>
    </nav>
    <hr></hr>
    </div>
    
  );
};

export default Navbar;
