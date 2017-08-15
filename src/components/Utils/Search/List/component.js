import React, { Component } from 'react';
import SearchForId from '../../Hoc/Searchid.js';
import setSelected , { sendDateToStore }from '../../Actions/actions.js';
import { connect } from 'react-redux';

import './style.css';

class List extends Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(typ,day) {
    const { selectedDate, setSelected, sendDateToStore } = this.props;
    const {id} = this.props.mealId;
    let date = selectedDate.substring(0,8)+day;
    
    setSelected(typ,id); 
    sendDateToStore(date);
  }
  render() {
    const {items} = this.props;
    const list = items.filter(item => item.name);
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

export default connect(null, {sendDateToStore,setSelected})(SearchForId(List));
