import React, { Component } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Glyphicon, Button, Tooltip, OverlayTrigger} from 'react-bootstrap';
import './styles.css';

class MealCopy extends Component {
  render() {
    const {desc} = this.props.selectedId;
    const tooltip = (
      <Tooltip placement="bottom" className="in" id="three">
         skopiuj do schowka!
      </Tooltip>);

    return (
      <div className="MealCopy">
        <OverlayTrigger placement="bottom" overlay={tooltip} >
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
        </OverlayTrigger>
      </div>
    );
  }
}

export default MealCopy;
