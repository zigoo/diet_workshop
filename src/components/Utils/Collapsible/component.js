import React, { Component } from 'react';
import {Well, Collapse, Button} from 'react-bootstrap';
import './style.css';
 

export class Collapsible extends Component {
  handleClick(e) {
    const {id, isExpanded, setCollapse, setVisible} = this.props;
    e.preventDefault();
    
    setCollapse(id, !isExpanded);

    if (isExpanded) {
     setVisible(id);
    } else if (!isExpanded) {
     setVisible(0);
    }

    if (this.props.onClick)
      this.props.onClick();
  }

  render() {
    const {children, title, isExpanded, visible, id} = this.props;
    const bsClass = isExpanded ? '' : " activ";
    const isHidden = (visible=== id || visible===0) ? '' : ' hidden';

    return (
      <div className={"Collapsible"+isHidden}>
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
