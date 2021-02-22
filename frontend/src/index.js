/* eslint-disable no-underscore-dangle */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import App from './components/App';
import NavBar from './components/NavBar';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" component={App} />
        <Route path="/books" component={App} />
        <Route path="/categories" component={App} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
