const AUTH_USER = 'auth_user';
const UNAUTH_USER = 'unauth_user';
const AUTH_ERROR = 'auth_error';

export default function(state = {}, action) {
  switch(action.type) {
  case AUTH_USER:
    return {...state, error: '', authenticated: true};
  case UNAUTH_USER:
    return {...state, authenticated: false};
  case AUTH_ERROR:
    return {...state, error: action.payload};
  default:
    return state;
  }
}