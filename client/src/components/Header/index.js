import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'
import logo from '../../assets/images/initech_clear.png';

const Header = (props) => {
  return (
    <header>
      <Link to='/'>
        <img src={logo} alt="Initech logo" className="brand" />
      </Link>
      <h1 className="header-title tech">Innovation + Technology</h1>
      <ul className="nav">
        <li>
          <i className="fas fa-cart-plus"></i>
        </li>
        {props.user ? < li >
          <i className="fas fa-user-tie"></i>
        </li> : <li>
            <Link to='/login' className='header-link'><i className="fas fa-sign-in-alt"></i></Link>
          </li>}

      </ul>
    </header>
  );
}

export default Header;