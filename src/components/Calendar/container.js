import Calendar from './component.js';
import { connect } from 'react-redux';
import { sendDateToStore } from './actions.js';

function mapStateToProps(state){
  return {
    selectedDay: state.selectedDate 
  }
}

export default connect(mapStateToProps,{sendDateToStore})(Calendar);
 