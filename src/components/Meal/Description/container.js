import MealDescription from './component.js';
import { connect } from 'react-redux';

function mapStateToProps(state){
  const day = state.selectedDate !== null ? parseInt(state.selectedDate.substring(0,2)) : 1;
  return {
    meal: state.meals.find(meal => ( (meal.type === state.selectedMeal) && (meal.day === day)) ),
    dateSelected: state.selectedDate
  }
}
export default connect(mapStateToProps)(MealDescription);
