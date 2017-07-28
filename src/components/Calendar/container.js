import Calendar from './component.js';
import { connect } from 'react-redux';

function mapStateToProps(state){
  return {
    selectedDay: state.selectedDate 
  }
}

export default connect(mapStateToProps)(Calendar);
 