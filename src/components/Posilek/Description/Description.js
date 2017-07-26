import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';

class PosilekDescription extends Component {
 /* componentWillReceiveProps(nextProps) {
    if (nextProps.meal.opis !== undefined && nextProps.meal.nazwa !== undefined) {
    	console.log(nextProps.meal.opis)
    	opis = nextProps.meal.opis;
    }
  }*/
  render() {
    const  {opis, nazwa} = this.props.meal;  ///i tu sie wypierdala
   
    return (
      <div className="PosilekDescription">
        {opis}
      </div>
    );
  }
}

const mapStateToProps= (state)  => {
  var sel = state.selected;
  console.log(sel)
  return {
  	/*opis: state.posilki.opis,
  	hint: state.posilki.hint*/
    meal: state.posilki.find(posilek => posilek.id === sel)
  }
}
export default connect(mapStateToProps)(PosilekDescription);
 