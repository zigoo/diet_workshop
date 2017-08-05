import MealDescription from './component.js';
import { connect } from 'react-redux';


function mapStateToProps(state){
  let day = state.meal.selectedDate;
  if (day > 10) {
  	day = (Math.floor(Math.random()*10));
  		console.log('random day ',day)
  }
  return {
    meal: state.meal.meals.find(meal => ((meal.type === state.meal.selectedMeal) && (meal.day === day)) ),
  }
}

export default connect(mapStateToProps)(MealDescription);
