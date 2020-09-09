import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from './utils/API';
import './App.css';

// Pages
import Landing from './pages/Landing';
import Testing from './pages/Testing';
import Store from './pages/Store';
import Login from './pages/Login';

class App extends Component {
  state = {
    user: false,
    id: null,
    current_cart: [],
    display_store: 'all',
    products: [],
    loading: false
  }

  componentDidMount() {
    console.log('component mounted');
    this.scrollTop();
    this.checkAuth();
    this.getAllProducts();
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

  handleLogin = (email, password) => {
    API.loginUser(email, password)
      .then(response => {
        console.log(response.data);
        if (response.data.token) {
          localStorage.setItem('ofsp-token', JSON.stringify(response.data.token));
          this.setState({ ...this.state, user: true, id: response.data.id })
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

  scrollTop = () => {
    window.scrollTo(0, 0);
  }

  checkAuth = () => {
    API.checkAuth()
      .then(response => {
        console.log(response);
        return response.status === 200 ? this.setUser(response.data) : this.unsetUser();
      })
      .catch(err => {
        this.unsetUser()
      })
  }

  setUser = (user) => {
    this.setState({ ...this.state, user: true, id: user._id, current_cart: user.current_cart })
  }

  unsetUser = () => {
    this.setState({ ...this.state, user: false, id: null, current_cart: [] })
  }

  setDisplayStore = (display) => {
    console.log(display);
    this.setState(prevState => {
      prevState.display_store = display;
      return prevState
    }, () => {
      display === 'all' ? this.getAllProducts() : this.getTypeProducts(display);
    });
  }

  getAllProducts = () => {
    this.toggleLoading()
    API.getAllProducts()
      .then(products => {
        console.log(products.data);
        this.setState({ ...this.state, products })
        this.setState(prevState => {
          prevState.products = products.data;
          prevState.loading = false;
          return prevState;
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  getTypeProducts = (type) => {
    this.toggleLoading()
    API.getTypeProducts(type)
      .then(products => {
        console.log(products.data);
        this.setState(prevState => {
          prevState.products = products.data;
          prevState.loading = false;
          return prevState;
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  toggleLoading = () => {
    this.setState({ ...this.state, loading: !this.state.loading })
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' render={props => (<Landing {...props} user={this.state.user} loading={this.state.loading} loginUser={this.loginUser} checkAuth={this.checkAuth} />)} />
          <Route exact path='/new' render={props => (<Testing {...props} user={this.state.user} />)} />
          <Route exact path='/store' render={props => (<Store {...props} user={this.state.user} products={this.state.products} loading={this.state.loading} display_store={this.state.display_store} setDisplayStore={this.setDisplayStore} />)} />
          <Route exact path='/login' render={props => (<Login {...props} user={this.state.user} handleLogin={this.handleLogin} />)} />
        </Switch>
      </Router>
    );
  }

}

export default App;
