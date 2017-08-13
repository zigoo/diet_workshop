import Collapsible from './component.js';
import { setCollapse, setVisible } from '../Actions/actions.js';
import { connect } from 'react-redux';

function mapStateToProps(state,props) {
  return { 
    isExpanded: state.collapsed[props.id],
    visible: state.collapsed.visible,
  };
}

export default connect(
	mapStateToProps,
    {setCollapse,setVisible})(Collapsible);