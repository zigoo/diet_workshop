import React, { Component } from 'react';
import PosilekBtn from './Button/Posilek_btn';
import { ButtonToolbar } from 'react-bootstrap';
import './style.css';

class PosilekHeader extends Component {
  render() {
    return (
      <div className="PosilekHeader">
        Jadlospis na dzisiaj <br />
        Wybierz posilek <br />
         <ButtonToolbar>
          <PosilekBtn typ={1} />
          <PosilekBtn typ={2} />
          <PosilekBtn typ={3} />
          <PosilekBtn typ={4} />
         </ButtonToolbar>
      </div>
    );
  }
}

export default PosilekHeader;
