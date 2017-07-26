/* eslint-disable */
import posilki from '../helpers/posilki.js';

const SELECTED = 'SELECTED';

const initialState = {
  posilki,
  selected:0
};


export default function posilek (state = initialState , action ) {
  switch (action.type) {
    case SELECTED:
    console.log(action.typ)
     return {
       ...state,
       selected: action.typ
     }
    default: 
      return state;
    }
}


