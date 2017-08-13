/* eslint-disable */
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import GetVisibility from '../Utils/Hoc/GetVisibility.js';
 

import {setVisible} from '../Utils/Actions/actions.js';

class StatsyBtn extends Component {
  handleClick () {
    const { dispatch } = this.props;

    if (window.location.pathname !=='/statsy') {
      browserHistory.push('/statsy');
    }
  }
  
  render() { 
    const {visible} = this.props;
    const isHidden = (visible===3 || visible===0) ? '' : ' hidden';
    console.log('Visible: ',this.props.visible);
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

