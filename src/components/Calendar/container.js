import Calendar from './component.js';
import { connect } from 'react-redux';
import { sendDateToStore } from './actions.js';

function mapStateToProps(state){
  return {
    selectedDay: state.meal.selectedDate 
  }
}

export default connect(mapStateToProps,{sendDateToStore})(Calendar);
 