import React from 'react';

const Landing = (props) => {
  return (
    <div className="container">
      <h1 className="ofsp">Office Space</h1>
      <p className="content ofsp">Work Sucks</p>
      {!props.user ? <h3>Not a user?</h3> : <h3>You are a user!</h3>}
    </div>
  );
}

export default Landing;