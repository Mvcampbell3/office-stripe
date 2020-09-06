import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from './utils/API';
import './App.css';

// Pages
import Landing from './pages/Landing';
import Testing from './pages/Testing';

class App extends Component {
  state = {
    user: false
  }

  componentDidMount() {
    console.log('component mounted')
  }

  loginUser = () => {
    API.loginUser('mvcampbell3@gmail.com', '12341234')
      .then(response => {
        console.log(response.data);
        if (response.data.token) {
          localStorage.setItem('ofsp-token', JSON.stringify(response.data.token))
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

  checkAuth = () => {
    API.checkAuth()
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' render={props => (<Landing {...props} user={this.state.user} loginUser={this.loginUser} checkAuth={this.checkAuth} />)} />
          <Route exact path='/new' render={props => (<Testing {...props} user={this.state.user} />)} />
        </Switch>
      </Router>
    );
  }

}

export default App;
