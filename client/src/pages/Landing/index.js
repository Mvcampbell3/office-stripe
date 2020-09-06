import React from 'react';
import './landing.css'
import Header from '../../components/Header';

const Landing = (props) => {
  return (
    <div className="container">
      <Header />
      <div className="main">
        <div className="splash">
          <div className="splash-wrapper">
            <h2 className="splash-title tech opac-up">Cutting Edge</h2>
            <p className="splash-sub ofsp opac-up">Office Space Store</p>
          </div>
        </div>
        <button className="btn" onClick={props.loginUser}>Login</button>
        <button className="btn" onClick={props.checkAuth}>Check</button>
      </div>
    </div>
  );
}

export default Landing;