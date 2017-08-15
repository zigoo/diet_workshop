/* eslint-disable */
import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import GetVisibility from '../Utils/Hoc/GetVisibility.js';

import './style.css';


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
      <div className="StatsyBtn">
       <button 
         className={"def"+isHidden}
         onClick={()=> this.handleClick()} >  
             Statsy  
       </button>       
      </div>
    );
  }
}

export default GetVisibility(StatsyBtn);

