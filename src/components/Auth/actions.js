import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from './types.js';

//const ROOT_URL = 'http://localhost:3090';
const ROOT_URL = 'https://dietserv.herokuapp.com';


export function signinUser({ email, password }){
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then(response => {   
        dispatch({ type: AUTH_USER });
        
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/meal');
      })
      .catch(() => {
        dispatch(authError('Bad login or password'));
      });
  };
}

export function signupUser({ email, password }){
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signup`, { email, password })
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/meal');
      })
      .catch(error => dispatch(authError(error.response.data.error)));
  };
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function signoutUser(){
  localStorage.removeItem('token');
  return {
    type: UNAUTH_USER
  };
}