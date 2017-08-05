import React, { Component } from 'react';
import './style.css';

class MealDescription extends Component {
  render() {
    const {desc, name, hint } = this.props.meal !== undefined ? this.props.meal : '';
    return (
      <div>
        <div className="MealDescription">
          {/* add r-bootstrap tooltips */}
          <h3>{name}</h3> <br />
              {desc} <br />
          <p>
              {hint}
          </p>
          <br />
          <h3>na razie dzialaja daty 1-10!!</h3>
        </div>
      </div>
    );
  }
}
 
export default MealDescription;
 