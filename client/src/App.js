import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

// Pages
import Landing from './pages/Landing';

class App extends Component {
  state = {
    user: false
  }

  componentDidMount() {
    console.log('component mounted')
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' render={props => (<Landing {...props} user={this.state.user} />)} />
        </Switch>
      </Router>
    );
  }

}

export default App;
