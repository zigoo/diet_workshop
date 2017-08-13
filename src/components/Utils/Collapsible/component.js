import React, { Component } from 'react';
import {Well, Collapse, Button} from 'react-bootstrap';
import { setCollapse } from '../Actions/actions.js';
import './style.css';
 

export class Collapsible extends Component {
  handleClick(e) {
    const {id, isExpanded, dispatch} = this.props;
    e.preventDefault();
    
    dispatch(setCollapse(id, !isExpanded));

    if (this.props.onClick)
      this.props.onClick();
  }

  render() {
    const {children, title, isExpanded} = this.props;
    const bsClass = isExpanded ? '' : " activ";
    return (
      <div className="Collapsible">
        <Button 
          bsStyle="default" className={"def" +bsClass} bsSize="large" 
          onClick={(e) => this.handleClick(e)}>
          {title} 
        </Button>	        
        <Collapse in={!isExpanded}>
          <div>
            <Well bsClass='well well-custom'>
              {children}
            </Well>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default Collapsible;
