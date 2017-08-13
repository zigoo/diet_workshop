import Collapsible from './component.js';
import { connect } from 'react-redux';

function mapStateToProps(state,props) {
  return { 
    isExpanded: state.collapsed[props.id],
    id : props.id,
  };
}

export default connect(mapStateToProps)(Collapsible);