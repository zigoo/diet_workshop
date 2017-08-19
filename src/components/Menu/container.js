import MenuTop from './component.js';
import { connect } from 'react-redux';
import SearchForId from '../Utils/Hoc/Searchid.js';
import setSelected, { setVisible, setCollapse } from '../Utils/Actions/actions.js';

function mapStateToProps(state,props) {
  return { 
    isExpanded: state.collapsed,
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps,{setVisible,setCollapse,setSelected})(SearchForId(MenuTop));