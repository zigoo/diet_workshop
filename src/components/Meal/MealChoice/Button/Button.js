import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import { Button } from 'react-bootstrap';
  
import  typ from './types.js'
import './style.css';

 

class MealBtn extends Component {
  handleClick = () => {
    const { onClick, type } = this.props;
    const path = typ[this.props.type].replace(/[^a-zA-Z]/g, "");;
   
    console.log(path)
    //if (path === '')    
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
