import React from 'react';
// importing the css file for header part/component
import './Header.css'

const navbar = () => {
    return (
<div>
 <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a className="navbar-brand " href="#"><img src="https://www.programming-hero.com/assets/img/hero-header/iphone/programming-hero-logo.png" /></a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" style={{color:"white"}} href="/home">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{color:"white"}} href="/features">Features</a>
            </li>
            <li >
              <a className="nav-link" style={{color:"white"}} href="/pricing">Pricing</a>
            </li>
          </ul>
        </div>
      </nav>
    </div> 
</div>
    );
};

export default navbar;