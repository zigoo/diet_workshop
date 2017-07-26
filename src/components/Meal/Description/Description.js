import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';

class MealDescription extends Component {
  render() {
    const  {desc, name} = this.props.meal;  
    return (
      <div className="MealDescription">
       {desc}
      </div>
    );
  }
}

const mapStateToProps= (state)  => {
  var sel = state.selected;
  return {
    meal: state.meals.find(meal => meal.id === state.selected)
  }
}
export default connect(mapStateToProps)(MealDescription);
 