import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

import Home from './pages/home';
import login from './pages/login';
import signUp from './pages/signup';

import Navbar from './components/navbar';
import AuthRoute from './util/AuthRoute'

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import themeFile from './util/theme';
import './App.css';

const theme = createMuiTheme(themeFile);

const token = localStorage.IdToken;
let authenticated;
if (token) {
  const decodeToken = jwtDecode(token);
  console.log(decodeToken);
  if (decodeToken.exp * 1000 < Date.now()) {
    window.location.href = '/login';
    authenticated = false;
  } else {
    authenticated = true;
  }
}

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <AuthRoute
                  path="/login"
                  component={login}
                  authenticated={authenticated}
                />
                <AuthRoute
                  path="/signup"
                  component={signUp}
                  authenticated={authenticated}
                />
              </Switch>
            </div>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
