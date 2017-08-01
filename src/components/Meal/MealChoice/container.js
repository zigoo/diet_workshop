import MealChoice from './component.js';
import { connect } from 'react-redux';


function mapStateToProps(state) {
  return {
 //   selected: state.meals.selected
  }
}
export default connect(mapStateToProps)(MealChoice);