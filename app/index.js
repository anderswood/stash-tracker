import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'react-router-redux';
// import createHistory from 'history/createBrowserHistory';
// import { Route } from 'react-router-dom'

import { rootReducer } from './reducers/index';
import App from './components/App';
import './styles/app.scss';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devTools);


render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('main'))
