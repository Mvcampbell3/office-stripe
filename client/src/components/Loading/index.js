import React from 'react';
import './loading.css';
const Loading = (props) => {
  return (
    <div className="loading-container">
      <div className="loading">
        <div className="dot dot1"></div>
        <div className="dot dot2"></div>
        <div className="dot dot3"></div>
        <div className="dot dot4"></div>
        <div className="dot dot5"></div>
      </div>
    </div>
  );
}

export default Loading;