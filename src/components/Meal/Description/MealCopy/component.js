import React, { Component } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import {Well, Collapse, Button} from 'react-bootstrap'

class MealCopy extends React.Component {
	constructor() {
	  super()
    
	}

	render() {
	  const {desc} = this.props.selectedId;
	  return (
	  	<div className="MealCopy">
	  	<CopyToClipboard text={desc}>
	  	  <Button 
	  	    bsStyle="default" className="def" 
	  	    bsSize="small" >          
	  		MealCopy
	  	{/*glyphicon*/}
          </Button>
         </CopyToClipboard>
	  	</div>
	  )
	}
}

export default MealCopy;