import Calendar from './component.js';
import { connect } from 'react-redux';
import { sendDateToStore, setCollapse, setVisible } from '../Utils/Actions/actions.js';

function mapStateToProps(state) {
  return {
    selectedDay: state.meal.selectedDate,
    meals: state.meal.meals,
  };
}

export default connect(mapStateToProps,{sendDateToStore,setCollapse,setVisible})(Calendar);
 