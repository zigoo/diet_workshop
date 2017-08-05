import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import { Button } from 'react-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';
  
import  typ from './types.js'
import './style.css';

bootstrapUtils.addStyle(Button, 'def');

class MealBtn extends Component {
  handleClick = () => {
    const { onClick, type } = this.props;
    const path = typ[this.props.type].replace(/[^a-zA-Z]/g, "");;

    onClick(type)
    browserHistory.push('/'+path)
  }
  
  render() {
    const {selected, id} = this.props;
    const bsClass = (selected===id) ? " activ" : '';
    return (
      <Button bsStyle="default" className={"def " +bsClass} bsSize="large" 
              onClick={this.handleClick}>
                {typ[this.props.type]}
      </Button>
    );
  }
}

export default MealBtn;
