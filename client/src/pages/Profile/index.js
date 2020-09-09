import React from 'react';
import './profile.css';

import Header from '../../components/Header';

const Profile = (props) => {
  return (
    <div className="container-profile">
      <Header user={props.user} />
      <div className="main-profile">
        <button className="btn btn-primary" onClick={props.logout}>Sign Out</button>
      </div>
    </div>
  );
}

export default Profile;