/* eslint-disable */
import meals from '../helpers/meals.js';

const SELECTED = 'SELECTED';
const SELECTED_DATE = 'SELECTED_DATE';

const initialState = {
  meals,
  selectedMeal: 1,
  selectedDate: 1,
  selectedId: 111
};


export default function meal (state = initialState , action ) {
  switch (action.type) {
    case SELECTED:
      return {
        ...state,
        selectedMeal: action.typ,
        selectedId: action.selectedId
      }
    case SELECTED_DATE:
      return {
        ...state,
        selectedDate: action.day
      }
    default: 
      return {...state}
    }
}


