import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import home from './pages/home';
import login from './pages/login';
import signup from './pages/signup';
import Navbar from './components/navbar';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" Component={home} />
              <Route path="/login" Component={login} />
              <Route path="/signup" Component={signup} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
