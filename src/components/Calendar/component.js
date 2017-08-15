import React, { Component } from 'react';
 
import Collapsible from '../Utils/Collapsible/container.js';
import { browserHistory } from 'react-router';
 
import { DayPickerSingleDateController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

import moment from 'moment';
import './style.css';

class Calendar extends Component {
  constructor(props){
    super(props);

    this.onDateChange = this.onDateChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  handleRoute() {
    if (window.location.pathname !=='/meal') {
      browserHistory.push('/meal');
    }
  }

  onDateChange(date) {
    const {sendDateToStore} = this.props; 
    let dateHlpr = moment(date).format('YYYY-MM-DD');

    sendDateToStore(dateHlpr);
  }


  onFocusChange() {
   //just for defaultprops requirements sake
  }

  render() {
    const { selectedDay } = this.props;
    let date = moment(new Date(selectedDay) );

    return(
      <div className="Calendarr">	
        <Collapsible id={2} title='Kalendarz' onClick={this.handleRoute} clName="Calendar-margin" >  
          <DayPickerSingleDateController
            onDateChange={this.onDateChange}
            onFocusChange={this.onFocusChange}
            focused={true}
            date={date} />
        </Collapsible>  
      </div> 
    );
  }
}

export default Calendar;
