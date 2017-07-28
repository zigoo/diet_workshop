/* eslint-disable */
import meals from '../helpers/meals.js';

const SELECTED = 'SELECTED';
const SELECTED_DATE = 'SELECTED_DATE';

const initialState = {
  meals,
  selected:0,
  selectedDate: null
};


export default function meal_reducer (state = initialState , action ) {
  switch (action.type) {
    case SELECTED:
      return {
        ...state,
        selected: action.typ
      }
    case SELECTED_DATE:
      return {
        ...state,
        selectedDate: action.date
      }
    default: 
      return state;
    }
}


