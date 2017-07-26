/* eslint-disable */
import meals from '../helpers/meals.js';

const SELECTED = 'SELECTED';

const initialState = {
  meals,
  selected:0
};


export default function posilek (state = initialState , action ) {
  switch (action.type) {
    case SELECTED:
     return {
       ...state,
       selected: action.typ
     }
    default: 
      return state;
    }
}


