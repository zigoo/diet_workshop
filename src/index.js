//  eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
 
import { Provider }	 from 'react-redux';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { Router, Route, browserHistory } from 'react-router'

import { composeWithDevTools } from 'redux-devtools-extension';
//import { routerMiddleware } from 'react-router-redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
 

import meal from './ridax/meal.js';
import App from './components/App.js';
 

 //const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const reducer = combineReducers({
   meal,
   routing: routerReducer
})
  //, composeWithDevTools(applyMiddleware(middleware)) 
  	
export const store = createStore(
  reducer,
  composeWithDevTools() 
);

 
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
   <div>
     <Router history={history}>
      <Route path="/" component={App} />
       <Route path="/sniadanie" component={App}/>
        <Route path="/drugieSniadanie" component={App}/>
         <Route path="/obiad" component={App}/>
          <Route path="/kolacja" component={App}/>
     </Router>
   </div>
</Provider> 
, document.getElementById('root'));