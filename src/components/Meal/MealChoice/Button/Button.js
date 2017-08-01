/* eslint-disable */
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './style.css';


class MealBtn extends Component {
  handleClick = () => this.props.onClick(this.props.type)
 
  render() {
   const typ = { 
                  1: 'sniadanie' , 
   				        2: 'drugie sniadanie',
   				        3: 'obiad',
   				        4: 'kolacja'
   		         }
    return (
      <Button bsStyle="default cst-wdth" bsSize="large" 
              onClick={this.handleClick}>
                {typ[this.props.type]}
      </Button>
    );
  }
}


export default MealBtn;
