import React, { Component } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Glyphicon, Button} from 'react-bootstrap';
import './styles.css';

class MealCopy extends Component {
  render() {
    const {desc} = this.props.selectedId;
    return (
      <div className="MealCopy">
        <CopyToClipboard text={desc}>
          <Button 
            bsStyle="default" className="def" 
            bsSize="small" >  
            <Glyphicon glyph="copy">copy</Glyphicon>        
            {/*glyphicon*/}
          </Button>
        </CopyToClipboard>
      </div>
    );
  }
}

export default MealCopy;
 