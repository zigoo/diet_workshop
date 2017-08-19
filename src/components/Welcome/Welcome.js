import React, { Component } from 'react';
import './style.css';

class Welcome extends Component {
  render() {
    return(
      <div className="welcome">
        <img className="img-responsive" src="http://image.ibb.co/bP6sP5/welcome.png" alt="witaj"></img>
        <h3>
          Witaj w diet-workshop'ie :) <br/>
          Zaloguj sie lub załóż konto
        </h3>
      </div>
    );
  }
}

export default Welcome;