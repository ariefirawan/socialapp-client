import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { Provider } from 'react-redux';
import axios from 'axios';

import Home from './pages/home';
import login from './pages/login';
import signUp from './pages/signup';
import user from './pages/user';

import Navbar from './components/navbar';
import AuthRoute from './util/AuthRoute';

import store from './redux/store';
import { SET_AUTHENTICATED } from './redux/types';
import { logOutUser, getUserData } from './redux/actions/user.action';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import themeFile from './util/theme';
import './App.css';

const theme = createMuiTheme(themeFile);

const token = localStorage.IdToken;
if (token) {
  const decodeToken = jwtDecode(token);
  if (decodeToken.exp * 1000 < Date.now()) {
    store.dispatch(logOutUser());
    window.location.href = '/login';
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common['Authorization'] = token;
    store.dispatch(getUserData());
  }
}

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <Router>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <AuthRoute path="/login" component={login} />
                <AuthRoute path="/signup" component={signUp} />
                <Route exact path="/users/:handle" component={user} />
                <Route exact path="/users/:handle/scream/:screamId" component={user} />
              </Switch>
            </div>
          </Router>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
