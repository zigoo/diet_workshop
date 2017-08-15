import React, { Component } from 'react';
import {Collapse} from 'react-collapse';
import {Well} from 'react-bootstrap';
import './style.css';


export class Collapsible extends Component {

  handleClick(e) {
    const {id, isExpanded, setCollapse, setVisible} = this.props;
    
    if (isExpanded) {
      setVisible(id);
    } else if (!isExpanded) {
      setVisible(0);
    }

    setCollapse(id, !isExpanded);
    if (this.props.onClick)
      this.props.onClick();
  }


  render() {
    const {children, title, isExpanded, visible, id} = this.props;
    const isHidden = (visible=== id || visible===0) ? '' : ' hidden';
    const bsClass = isExpanded ? '' : " activ";

    return (
      <div className="Collapsible">
        <button 
          className={"def" +bsClass+isHidden}  
          onClick={(e) => this.handleClick(e)} >
             {title} 
        </button>  
        <div >
          <Collapse isOpened={!isExpanded} >
            <Well className="well well-custom">
              <div className={this.props.clName}>
                 {children}
              </div>
            </Well>
          </Collapse>
        </div>
      </div>
    );
  }
}

export default Collapsible;