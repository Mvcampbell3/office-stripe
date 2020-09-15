import React, { useState } from 'react';
import './login.css';
import Header from '../../components/Header';
import ErrorDisplay from '../../components/ErrorDisplay';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [actionLogin, setActionLogin] = useState(true);

  const toggleLogin = (e) => {
    e.preventDefault();
    setActionLogin(!actionLogin);
  }

  return (
    <div className="container-login">
      <Header user={props.user} />
      {props.error ? <ErrorDisplay error={props.error} messages={props.error_messages} clearErrors={props.clearErrors} /> : null}
      <div className="main-login">
        <form className='login-form' onSubmit={(e) => {
          e.preventDefault();
          props.handleLogin(email, password, actionLogin)
        }}>
          <div className="input-group">
            <h3 className="login-title tech">{actionLogin ? "Login" : "Sign Up"}</h3>
          </div>
          <div className="input-group">
            <label htmlFor="email" className='input-label'>Email</label>
            <input type="email" className='my-input' name="email" placeholder="email@email.com" id="email" autoComplete='email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input-group">
            <label htmlFor="password" className="input-label">Password</label>
            <input type="password" name="password" id="password" placeholder="********" className='my-input' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="input-group flex-between">
            <input type="submit" value={actionLogin ? "Login" : "Sign Up"} className="my-submit" />
            <button className="my-submit" onClick={(e) => toggleLogin(e)}>Need To Sign Up?</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;