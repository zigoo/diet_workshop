import React, { Component } from 'react';
import './style.css';

class MealDescription extends Component {
  render() {
    const mealType = ['sniadanie', 'pozne sniadanie', 'obiad', 'kolacja']
    const {desc, name, hint, type } = this.props.meal !== undefined ? this.props.meal : '';
   
    return (
      <div>
        <div className="MealDescription">
          {/* add r-bootstrap tooltips */}
          <h3>{name}</h3> 
          {mealType[type-1]} <br /><br />
              {desc} <br />
          <p>
              {hint}
          </p>
          <br />
        </div>
      </div>
    );
  }
}
 
export default MealDescription;
 