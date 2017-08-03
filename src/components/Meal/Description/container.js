import MealDescription from './component.js';
import { connect } from 'react-redux';


function mapStateToProps(state){
  const mealReducer = state.meal;
  const day = mealReducer.selectedDate !== null 
            ? parseInt(mealReducer.selectedDate.substring(0,2),10) : 1;

  return {
    meal: state.meal.meals.find(meal => ((meal.type === mealReducer.selectedMeal) && (meal.day === day)) ),
    dateSelected: state.meal.selectedDate,
  }
}

export default connect(mapStateToProps)(MealDescription);
