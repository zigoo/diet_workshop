import MealDescription from './component.js';
import { connect } from 'react-redux';

function mapStateToProps(state){
  return {
    meal: state.meals.find(meal => meal.id === state.selectedMeal)
  }
}
export default connect(mapStateToProps)(MealDescription);