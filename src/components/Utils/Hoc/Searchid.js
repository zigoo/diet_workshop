import React, { Component } from 'react';
import { connect } from "react-redux";

function SearchForId(ComponentHoc) {
  class CommonComponent extends Component {
    constructor(props){
      super();
    }
    render() {
     console.log('SearchForId');
      return <ComponentHoc {...this.props} />;
    }
  }


  function mapStateToProps(state) {
    let day = state.meal.selectedDate;
    if (day > 10) 
      day = 1 + (Math.floor(Math.random()*10));
     
    console.log(day);
    return {
      selectedId: state.meal.meals.find(meal => ((meal.type === state.meal.selectedMeal) && (meal.day === day)) ),
    };
  }

  return connect(mapStateToProps)(CommonComponent);
}

export default SearchForId;