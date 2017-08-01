/* eslint-disable */
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { routerMiddleware, push } from 'react-router-redux'
import { store } from '../../../../index.js';
import  typ from './types.js'
import './style.css';

import { browserHistory } from 'react-router'

class MealBtn extends Component {
  handleClick = () => {
    const path = typ[this.props.type];
    this.props.onClick(this.props.type)
  
    browserHistory.push('/'+path)
    // czy zrobic context.router.push??
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
