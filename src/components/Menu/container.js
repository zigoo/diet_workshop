import MenuTop from './component.js';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  let day = state.meal.selectedDate;
  if (day > 10) 
    day = 1 + (Math.floor(Math.random()*10));

  return { 
    isExpanded: state.collapsed,
    selectedId: state.meal.meals.find(meal => ((meal.type === state.meal.selectedMeal) && (meal.day === day)) ),
  };
}

export default connect(mapStateToProps)(MenuTop);