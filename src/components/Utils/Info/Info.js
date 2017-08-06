import React, { Component } from 'react';
import './style.css';

class Info extends Component {
  render() {
    return(
      <div className="Info">	
      <p>
        Works best on my laptop ;) <br/>
        Things to do: <br/>
          integrate router & redux (not 100% yet) <br />
          login ability <br/>
          database integration <br/>
          graphic statistics <br /> 
          more (&&editable) content <br/>
          some cool features ;) <br/>
          sharing messenger/facebook <br/>
          styling (of course we will! :)
       </p>
      </div>
    );
  }
}

export default Info;