import React, { useState } from 'react';
import './login.css';
import Header from '../../components/Header';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="login-container">
      <Header user={props.user} />
      <div className="main-login">
        <form className='login-form' onSubmit={(e) => {
          e.preventDefault();
          props.handleLogin(email, password)
        }}>
          <div className="input-group">
            <label htmlFor="email" className='input-label'>Email</label>
            <input type="email" className='login-input' name="email" id="email" autoComplete='email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input-group">
            <label htmlFor="password" className="input-label">Password</label>
            <input type="password" name="password" id="password" className='login-input' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="input-group">
            <input type="submit" value='submit' className="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;