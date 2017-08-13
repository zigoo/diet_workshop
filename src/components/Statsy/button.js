/* eslint-disable */
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import GetVisibility from '../Utils/Hoc/GetVisibility.js';


class StatsyBtn extends Component {
  handleClick () {
    if (window.location.pathname !=='/statsy') {
      browserHistory.push('/statsy');
    }
  }
  
  render() { 
    const {visible} = this.props;
    const isHidden = (visible===3 || visible===0) ? '' : ' hidden';
    return (
      <div className={"StatsyBtn"+isHidden}>
       <Button 
         bsStyle="default" className="def" 
         bsSize="large" onClick={()=> this.handleClick()} >  
             Statsy  
       </Button>       
      </div>
    );
  }
}

export default GetVisibility(StatsyBtn);

