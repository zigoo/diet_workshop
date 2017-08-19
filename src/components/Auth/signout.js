import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions.js';
import './style.css';

class Signout extends Component {
  componentWillMount() {
    this.props.signoutUser();
  }

  render() {
    return(
      <div className="signout">
        <img className="img-responsive" src="http://image.ibb.co/dbNz45/welcome.png" alt="avatar"></img>
        <h3>
         Dziękuje za wizytę! <br />
         Mam nadzięję, że jeszcze się zobaczymy ;)
        </h3>
      </div>
    );
  }
}

export default connect(null, actions)(Signout);