import React, { Component } from 'react';
import setSelected from '../../../Meal/MealChoice/actions.js';
import { connect } from 'react-redux';
import { sendDateToStore } from '../../../Calendar/actions.js';

import './style.css';


class List extends Component {
  constructor(){
    super();
      this.handleClick = this.handleClick.bind(this);
  }
  handleClick(typ,day) {
    const { setSelected, sendDateToStore } = this.props;
    
    setSelected(typ) 
    sendDateToStore(day)
  }
  render() {
    const {items} = this.props;
    const list = items.filter(item => item.name)
    return (
      <ul className="List">
      {
        list.map(item => 
          <li key={item.name} onClick={(e) => this.handleClick(item.type, item.day)} >
            {item.name}  
          </li>
        )
      } 
      </ul>
    );
  }
}

export default connect(null, {
  sendDateToStore,
  setSelected
})(List);
