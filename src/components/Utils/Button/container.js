import MealBtn from './component.js';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    selected: state.meal.selectedMeal,
  };
};

export default connect(mapStateToProps)(MealBtn);