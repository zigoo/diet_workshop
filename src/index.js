/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
 
import { Provider }	 from 'react-redux';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { Router, Route, browserHistory, IndexRoute, IndexRedirect } from 'react-router';

import { composeWithDevTools } from 'redux-devtools-extension';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
 
import meal from './ridax/meal.js';
import mealEaten from './ridax/mealEaten.js';
import collapsed from './ridax/collapsed.js';

import App from './components/App.js';
import MealDescripton from './components/Meal/Description/container.js';
import Statsy from './components/Statsy/component.js';

import registerServiceWorker from './registerServiceWorker';

export const reducer = combineReducers({
  meal,
  mealEaten,
  collapsed,
  routing: routerReducer
});
 
export const store = createStore(
  reducer,
  composeWithDevTools() 
);

 
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
  
      <Router history={history}>
        <Route path="/" component={App} >
        <IndexRedirect to="/meal" />
          <Route path="/meal" component={MealDescripton}/>
          <Route path="/statsy" component={Statsy}/>
        </Route>
      </Router>
 
  </Provider> 
  , document.getElementById('root'));
       // <IndexRoute component={App}/>
registerServiceWorker();