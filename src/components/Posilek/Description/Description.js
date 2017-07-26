import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';

class PosilekDescription extends Component {
  render() {
    const  {opis, nazwa} = this.props.meal;  
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
    meal: state.posilki.find(posilek => posilek.id === sel)
  }
}
export default connect(mapStateToProps)(PosilekDescription);
 