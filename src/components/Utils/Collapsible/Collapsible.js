import React, { Component } from 'react';
import {Well, Collapse, Button} from 'react-bootstrap'

import './style.css';

export class Collapsible extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isExpanded: false
		}
	}

	handleClick(e) {
		e.preventDefault()
		this.setState({
			isExpanded: !this.state.isExpanded
		})	
	}

	render() {
		const {children, title} = this.props;
		const {isExpanded} = this.state;
		return (
		  <div className="Collapsible">
		    <Button 
              bsStyle="default def" bsSize="large" 
              onClick={(e) => this.handleClick(e)}>
                {title} 
            </Button>	        
 		    <Collapse in={isExpanded}>
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
