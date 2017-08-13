import React, { Component } from 'react';
import DayPicker from 'react-day-picker';
import LocaleUtils from 'react-day-picker/moment';
import Collapsible from '../Utils/Collapsible/container.js';
import { browserHistory } from 'react-router';

import 'moment/locale/pl';
import 'react-day-picker/lib/style.css';
import './style.css';

class Calendar extends Component {

  handleDayClick(day, { selected={} }) {
    const { sendDateToStore  } = this.props; 
    try {
      const helper = day.toLocaleDateString();
      const daySentFromCalender = helper !== null ? parseInt(helper.substring(0,2),10) : 1;
 
      sendDateToStore(daySentFromCalender);
    }
    catch (err) {
      console.log(err);
    } 
  }

  handleRoute() {
    if (window.location.pathname !=='/meal') {
      browserHistory.push('/meal');
    }
  }

  render() {
    const { selectedDay } = this.props;
    const mealsQuantity = this.props.meals.length;

    const months = ['styczeń','luty','marzec','kwiecień','maj','czerwiec','lipiec',
      'sierpień','wrzesień','październik','listopad','grudzień'];            
    return(
      <div className="Calendarr" >	
        <Collapsible id={2} title='Kalendarz' onClick={this.handleRoute}>
          <DayPicker {...{firstDayOfWeek: 1, months, modifiers: { disabled: {daysOfWeek: [0,6]} }, onDayClick: this.handleDayClick.bind(this),
            localeUtils: LocaleUtils, locale: "pl", selectedDay, todayButton: "dzisiaj" }} />
          <p>  
            Ilość przepisów: {mealsQuantity}
            
          </p>
        </Collapsible>
      </div> 
    );
  }
}


export default Calendar;

