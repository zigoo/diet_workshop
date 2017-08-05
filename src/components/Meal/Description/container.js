import MealDescription from './component.js';
import { connect } from 'react-redux';


function mapStateToProps(state){
  const day = state.meal.selectedDate;
  return {
    meal: state.meal.meals.find(meal => ((meal.type === state.meal.selectedMeal) && (meal.day === day)) ),
  }
}

export default connect(mapStateToProps)(MealDescription);
