import React, { Component } from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import 'moment/locale/pl';
import LocaleUtils from 'react-day-picker/moment';
import './style.css';

class Calendar extends Component {
  handleDayClick(day, { selected }) {
  	const { sendDateToStore } = this.props;
    try {
      sendDateToStore(day.toLocaleDateString());
    }
    catch (err) {
      console.log('error:',err)
    } 
  };

  render() {
    const { selectedDay } = this.props;
    const months = ['styczeń','luty','marzec','kwiecień','maj','czerwiec','lipiec',
                    'sierpień','wrzesień','październik','listopad','grudzień'];
    const mealsQuantity = this.props.meals.length;

    return(
      <div className="calendar_whole">	
  	    <DayPicker {...{firstDayOfWeek: 1, months, modifiers: { disabled: {daysOfWeek: [0,6]} }, onDayClick: this.handleDayClick.bind(this),
                        localeUtils: LocaleUtils, locale: "pl", selectedDay, todayButton: "dzisiaj" }} />
  	    <p>
         {selectedDay
           ? selectedDay
           : 'wybierz date'
         } <br/>
         Ilość przepisów: {mealsQuantity}
        </p>
   	   </div> 
   )
  }
}
export default Calendar;

