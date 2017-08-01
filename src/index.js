/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
 
import { Provider }	 from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension';


 
import meal from './ridax/meal.js'; 
 
import App from './components/App.js';
 
export const store = createStore(
 combineReducers({
   meal,
   routing: routerReducer
  }),
  composeWithDevTools()
);

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
</Provider> 
, document.getElementById('root'));