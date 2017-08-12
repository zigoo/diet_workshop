import React, { Component } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Glyphicon, Button } from 'react-bootstrap';
import './styles.css';

class MealCopy extends Component {
  render() {
    const {desc} = this.props.mealId;
    

    return (
      <div className="MealCopy">
        <div className="meal_copy">
          <CopyToClipboard text={desc}>
            <span id="copy">
              <Button 
                bsStyle="default" className="def"  bsSize="large" >  
                  kopiuj 
              </Button>
            </span>
          </CopyToClipboard>
        </div>
        <div className="meal_share">
          <Button bsStyle="default" className="def rev-def" bsSize="large" >          
             sharuj
          </Button>
        </div>
      </div>
    );
  }
}

export default MealCopy;
  //            <Glyphicon glyph="copy"></Glyphicon>
