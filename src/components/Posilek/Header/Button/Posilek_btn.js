import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './style.css';

class PosilekBtn extends Component {
  render() {
   const typ = { 1: 'sniadanie' , 
   				 2: 'drugie sniadanie',
   				 3: 'obiad',
   				 4: 'drugi obiad'
   		       }
    return (
      <Button bsStyle="primary cst-wdth" bsSize="xsmall">
        {typ[this.props.typ]}
      </Button>
    );
  }
}

export default PosilekBtn;
