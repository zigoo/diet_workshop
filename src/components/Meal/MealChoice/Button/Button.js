 
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
  
import  typ from './types.js'
import './style.css';

import { browserHistory } from 'react-router'
 

class MealBtn extends Component {
  

  handleClick = () => {
    const { onClick, type } = this.props;
    const path = typ[this.props.type];
    
    onClick(type)
    browserHistory.push('/'+path)
   
 }
  render() {
   
    return (
      <Button bsStyle="default cst-wdth" bsSize="large" 
              onClick={this.handleClick}>
                {typ[this.props.type]}
      </Button>
    );
  }
}


export default MealBtn;
