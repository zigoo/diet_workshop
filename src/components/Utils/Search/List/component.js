import React, { Component } from 'react';
import './style.css';


class List extends Component {
  render() {
    const {items} = this.props;
    return (
      <ul className="List">
      {
        items.map(item => 
          <li key={item}>{item} </li>
        )
      } 
      </ul>
    );
  }
}
 
export default List;
 