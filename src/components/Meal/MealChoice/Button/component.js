import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import { Button } from 'react-bootstrap';
  
import  typ from './types.js'
import './style.css';

class MealBtn extends Component {
  handleClick = () => {
    const { onClick, type } = this.props;
    const path = typ[this.props.type].replace(/[^a-zA-Z]/g, "");;

    onClick(type)
    browserHistory.push('/'+path)
  }
  
  render() { 
    const {selected, id} = this.props;
    return (
      <Button bsStyle="default cst-wdth" bsSize="large" 
              onClick={this.handleClick} active={id==selected}>
                {typ[this.props.type]}
      </Button>
    );
  }
}

export default MealBtn;
