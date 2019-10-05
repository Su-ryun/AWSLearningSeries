import React, { Component } from 'react';
import "./Header.css";

class Header extends Component {

  // Literal copy pasta of the below:
  // https://www.w3schools.com/bootstrap/bootstrap_navbar.asp
  render() {
    return( 
      <nav className="navbar navbar-default">
        <div className="navbar-header">
        </div>
        <ul className="nav navbar-nav navbar-right">
          <li> <a href="/home"> HOME </a> </li>
        </ul>
      </nav>
    )
  }
  
}

export default Header;