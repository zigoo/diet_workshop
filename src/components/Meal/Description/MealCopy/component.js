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
          <span id="copy">
            <Button 
              bsStyle="default" className="def" 
              bsSize="large" >  
                kopiuj 
                  <Glyphicon glyph="copy"></Glyphicon>
            </Button>
          </span>
        </CopyToClipboard>
      </div>
    );
  }
}

export default MealCopy;
 