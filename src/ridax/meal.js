/* eslint-disable */
import meals from '../helpers/meals.js';
import moment from 'moment';
import { LOCATION_CHANGE } from 'react-router-redux';

const SELECTED = 'SELECTED';
const SELECTED_DATE = 'SELECTED_DATE';

const selectedDateInit = moment(new Date()).format('YYYY-MM-DD');
const initialState = {
  meals,
  selectedId: 1 ,
  selectedMeal: 1,
  selectedDate: selectedDateInit,
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
        selectedDate: action.date
      }
    case LOCATION_CHANGE:
      const pathname = action.payload.pathname;
      const [_, operation = ""] = pathname.split('/');
      console.log('path:',operation)
      return {
        ...state,
        operation
      }; 
    default: 
      return {...state}
    }
}


