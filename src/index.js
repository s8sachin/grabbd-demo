/* eslint-disable no-underscore-dangle */
import 'core-js/es6/map';
import 'core-js/es6/set';
import 'core-js/fn/array/find';
import 'core-js/fn/array/includes';
import 'core-js/fn/number/is-nan';
import 'raf/polyfill';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { Route, Router } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import browserHistory from './utils/history';
import reducers from './reducers';
import App from './components/App';
// import registerServiceWorker from './registerServiceWorker';
import './index.scss';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(ReduxThunk)));

const rootElement = document.getElementById('root');
const app = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={App} />
    </Router>
  </Provider>
);
ReactDom.render(app, rootElement);
// registerServiceWorker();
