/* eslint-disable */
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';

class StatsyBtn extends Component {
  handleClick () {
    browserHistory.push('/statsy');
  }
  
  render() { 
    return (
      <div className="Statsy">
       <Button 
         bsStyle="default" className="def" 
         bsSize="large" onClick={this.handleClick} >  
             Statsy  
       </Button>       
      </div>
    );
  }
}
 
export default StatsyBtn;
