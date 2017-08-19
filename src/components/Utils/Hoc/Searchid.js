import React, { Component } from 'react';
import { connect } from "react-redux";
 

function SearchForId(ComponentHoc) {
  class CommonComponent extends Component {
    constructor(props){
      super();
    }
    render() {
      return <ComponentHoc {...this.props} />;
    }
  }


  function mapStateToProps(state) {
    let selDate = state.meal.selectedDate;
    let day =  parseInt(selDate.substring(8),10);
 
   /* if (day > 10) 
      day = 1 + (Math.floor(Math.random()*10));*/
      
    return {
      mealId: state.meal.meals.find(meal => ((meal.type === state.meal.selectedMeal) && (meal.day === day)) ),
      selectedDate: state.meal.selectedDate
    };
  }

  return connect(mapStateToProps)(CommonComponent);
}

export default SearchForId;