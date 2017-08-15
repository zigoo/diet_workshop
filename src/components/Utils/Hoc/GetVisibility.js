import React, { Component } from 'react';
import { connect } from "react-redux";

function getVisibility(ComponentHoc) {
  class CommonComponent extends Component {
    constructor(props){
      super();
    }
    render() {
      return <ComponentHoc {...this.props} />;
    }
  }


  function mapStateToProps(state) {
    return { 
      visible: state.collapsed.visible,
    };
  }

  return connect(mapStateToProps)(CommonComponent);
}

export default getVisibility;