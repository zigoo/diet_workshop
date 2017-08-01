import MealDescription from './component.js';
import { connect } from 'react-redux';

/*
function mapStateToProps(state){
  const mealReducer = state.meal;
  const day = mealReducer.selectedDate !== null 
               ? parseInt(mealReducer.selectedDate.substring(0,2),10) : 1;

  return {
    meal: state.meal.meals.find(meal => ( (meal.type === mealReducer.selectedMeal) && (meal.day === day)) ),
    meals: state.meal.meals,
    dateSelected: state.meal.selectedDate,
  }
}
*/

function mapStateToProps(state){
 // console.log(state.meals)
  try {

  const day = state.selectedDate !== null 
               ? parseInt(state.selectedDate.substring(0,2),10) : 1;
               
  return {
    meal: state.meals.find(meal => ( (meal.type === state.selectedMeal) && (meal.day === day)) ),
    meals: state.meals,
    dateSelected: state.selectedDate,
  }
} catch (err)
 {
 	console.log(err)
 }
}

export default connect(mapStateToProps)(MealDescription);
