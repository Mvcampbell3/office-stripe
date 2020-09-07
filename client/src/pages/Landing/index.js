import React from 'react';
import './landing.css'
import Header from '../../components/Header';

const Landing = (props) => {
  return (
    <div className="container">
      <Header user={props.user} />
      <div className="main">
        <div className="splash">
          <div className="splash-wrapper">
            <h2 className="splash-title tech opac-up">Welcome to Initech</h2>
            <button className="btn splash-btn tech">Visit Store</button>
          </div>
        </div>
        <section className="message">
          <div className="message-wrapper">
            <h2 className="message-title norm">Disclaimer</h2>
            <p className="message-content norm">- This website is not a real online store! This is a demonstration of React.js, Stripe.js, and other various web development technologies. It is very important to me that you know this. The payment area does not even accept real credit/debit cards! There is a list of multiple test cards that you can use, and they will be displayed on the payment screen.</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Landing;