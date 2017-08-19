import meal from './reducers/meal.js';
import collapsed from './reducers/collapsed.js';
import authReducer from './reducers/authReducer.js';

import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';


const rootReducer = combineReducers({
  meal,
  collapsed,
  form,
  auth:authReducer
});

export default rootReducer;