import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import { Button } from 'react-bootstrap'; 
  
import  typ from './types.js'
import './style.css';

 

class MealBtn extends Component {
  handleClick = () => {
    let x = window.location.pathname;
    const { onClick, type } = this.props;
    const path = typ[this.props.type].replace(/[^a-zA-Z]/g, "");;

    onClick(type)

    if (x !=='/'+path) {
      browserHistory.push('/'+path)
    }
  }
  
  render() {
    const {selected, id} = this.props;
    const bsClass = (selected===id) ? " activ" : '';
    return (
      <Button id="mybut" bsStyle="default" className={"def" +bsClass} bsSize="large" 
              onClick={this.handleClick}>
                {typ[this.props.type]}
      </Button>
    );
  }
}

export default MealBtn;
