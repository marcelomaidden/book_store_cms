/* eslint-disable no-underscore-dangle */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import App from './containers/App';
import NavBar from './containers/NavBar';
import Login from './containers/Login';
import SignUp from './containers/SignUp';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/books" component={App} />
        <Route path="/categories" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signout" component={Login} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);

