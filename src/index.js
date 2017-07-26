/* eslint-disable */
import React from 'react';
import ReactDOM, { render } from 'react-dom';
 
import { Provider }					    from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { Router, Route, browserHistory } from 'react-router'
 
import posilek from './ridax/posilek.js'; 
 
import App from './components/App.js';
 
export const store = createStore( 
	posilek,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
);


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
    </Router>
</Provider> 
, document.getElementById('root'));