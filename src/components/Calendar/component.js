import React, { Component } from 'react';
import DayPicker from 'react-day-picker';
import { sendDateToStore } from './actions.js';
import 'react-day-picker/lib/style.css';
import './style.css';


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
export default Calendar;