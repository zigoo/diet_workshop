import React, { Component } from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import MealBtn from './Button/container.js';
import './style.css';

class MealChoice extends Component {
  constructor(){
   super()
   this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(typ) {
   const {setSelected} = this.props;
   const {id} = this.props.selectedId;
   
   setSelected(typ,id);
  }

  render() {
    const btns_len = [{ key:1, type:1 }, { key:2, type:2 }, { key:3, type:3 }, { key:4, type:4 }]
    return (
      <div className="MealChoice">  
        <ButtonToolbar>
          {btns_len.map(btn => <MealBtn {...{type: btn.type, onClick: this.handleClick, key: btn.key, id: btn.key} } /> )}
        </ButtonToolbar>
      </div>
    );
  }
}

export default MealChoice;