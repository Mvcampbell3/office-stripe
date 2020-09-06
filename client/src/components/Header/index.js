import React from 'react';
import './header.css'
import logo from '../../assets/images/initech_clear.png';

const Header = (props) => {
  return (
    <header>
      <img src={logo} alt="Initech logo" className="brand" />
      <h1 className="header-title tech">Innovation + Technology</h1>
      <ul className="nav">
        <li>
          <i className="fas fa-cart-plus"></i>
        </li>
        <li>
          <i className="fas fa-user-tie"></i>
        </li>
      </ul>
    </header>
  );
}

export default Header;