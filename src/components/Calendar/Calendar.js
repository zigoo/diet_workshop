import React, { Component } from 'react';
import DayPicker from 'react-day-picker';
import { connect } from 'react-redux';
import 'react-day-picker/lib/style.css';
import './style.css';

import { sendDateToStore } from './actions.js';

class Calendar extends Component {
  handleDayClick(day, { selected }) {
  	const { dispatch } = this.props;
 
    dispatch(sendDateToStore(day.toLocaleDateString()));
  };

  render() {
    //fix invalid proptypes in DayPicker->selectedDay
    const { selectedDay } = this.props;
    return(
      <div className="calendar_whole">	
  	    <DayPicker 
  	      selectedDays={selectedDay}
          onDayClick={ this.handleDayClick.bind(this)}
  	      todayButton="dzisiaj" 
        />
  	    <p>
         {  selectedDay
          ? selectedDay
          : 'wybierz date'
         }
        </p>
   	   </div> 
   )
  }
}

function mapStateToProps(state){
  return {
    selectedDay: state.selectedDate 
  }
}

export default connect(mapStateToProps)(Calendar);
 