/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
 
import { Provider }	 from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router'

import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'react-router-redux'

import meal from './ridax/meal.js'; 
import App from './components/App.js';
 
const middleware = routerMiddleware(browserHistory);

export const store = createStore(
 //combineReducers({
   meal
 //  ,applyMiddleware(middleware)
 // }),
  ,composeWithDevTools()
);

//const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/sniadanie" component={App}/>
      <Route path="/drugie sniadanie" component={App}/>
      <Route path="/obiad" component={App}/>
      <Route path="/kolacja" component={App}/>
    </Router>
</Provider> 
, document.getElementById('root'));