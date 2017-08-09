/* eslint-disable */
import meals from '../helpers/meals.js';
import { LOCATION_CHANGE } from 'react-router-redux';

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
    case LOCATION_CHANGE:
      const pathname = action.payload.pathname;
      const [_, operation = ""] = pathname.split('/');
      console.log('opera:',operation)
      return {
        ...state,
        operation
      }; 
    default: 
      return {...state}
    }
}


