import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './style.css';


class MealBtn extends Component {
  handleClick = () => this.props.onClick(this.props.type)
 
  render() {
   const typ = { 1: 'sniadanie' , 
   				 2: 'drugie sniadanie',
   				 3: 'obiad',
   				 4: 'drugi obiad'
   		       }
    return (
      <Button bsStyle="primary cst-wdth" bsSize="xsmall" 
              onClick={this.handleClick}>
                {typ[this.props.type]}
      </Button>
    );
  }
}


export default MealBtn;
