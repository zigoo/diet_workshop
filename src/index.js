/* zzeslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
 
import reduxThunk from 'redux-thunk';
import { Provider }  from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './components/App.js';
import Signin from './components/Auth/signin.js';
import Signup from './components/Auth/signup.js';
import Signout from './components/Auth/signout.js';
import RequireAuth from './components/Auth/require_auth.js';
import Welcome from './components/Welcome/Welcome.js';
import MealDescripton from './components/Meal/Description/container.js';
import Statsy from './components/Statsy/component.js';

import { AUTH_USER } from './components/Auth/types.js';
import rootReducer from './ridax/reducers.js';


const storeWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = storeWithMiddleware(rootReducer,composeWithDevTools() );
const token = localStorage.getItem('token');

if (token) {
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Welcome} /> 
        <Route path="signin" component={Signin}/>
        <Route path="signout" component={Signout}/>
        <Route path="signup" component={Signup}/>
        <Route path="meal" component={RequireAuth(MealDescripton)}/>
        <Route path="statsy" component={RequireAuth(Statsy)}/>
      </Route>
    </Router>
  </Provider> 
  , document.getElementById('root'));

//IndexRedirect