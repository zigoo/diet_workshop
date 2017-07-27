import React, { Component } from 'react';
import  Datetime  from 'react-datetime';
import './style.css';

class Calendar extends Component {
  render() {
    var date = new Date();
    let helpers  = [{
  	  	  renderDay( props, currentDate, selectedDate ) {
            return <td {...props}>{ '0' + currentDate.date() }</td>;
      	  },
  	 	  renderMonth( props, month, year, selectedDate){
    	    return <td {...props}>{ month }</td>;
  		  },
  		  renderYear( props, year, selectedDate ){
    		return <td {...props}>{ year % 100 }</td>;
  		  }
	}];

   return(
   	 <div className="calendar_whole">	
  	   <Datetime 
  	     defaultValue={date}              
  	     timeFormat={false}
  	     className='calendar'    
  	     input={false}         
  	     renderDay={ helpers.renderDay } 
  	     renderMonth={ helpers.renderMonth } 
  	     renderYear={ helpers.renderYear } />
   	 </div>
   )
  }
}

export default Calendar;