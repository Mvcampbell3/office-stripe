import React from 'react';
import './errorDisplay.css';

const ErrorDisplay = (props) => {
  return (
    <div className="error-container">
      <div className="error-wrapper">
        <div className="inside-wrap">
          <h2 className="error-title">Opps! something went wrong...</h2>
          <div className="error-holder">
            {props.messages.map((err, i) => (
              <p className="error-message" key={i}>{err.content}</p>
            ))}
          </div>
          <div className="action-holder">
            <button className="button" onClick={props.clearErrors}>Okay</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ErrorDisplay;