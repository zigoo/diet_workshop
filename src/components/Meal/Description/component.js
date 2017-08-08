import React, { Component } from 'react';
import './style.css';

class MealDescription extends Component {
  render() {
    const mealType = ['sniadanie', 'pozne sniadanie', 'obiad', 'kolacja'];
    const {desc, name, hint, type } = this.props.selectedId !== undefined ? this.props.selectedId : '';
   
    return (
      <div>
        <div className="MealDescription">
          <div className="MealDescription-title">
            <h3>{name}</h3> 
            {mealType[type-1]}
          </div> <br />
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
 