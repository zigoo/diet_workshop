import MenuLeft from './component.js';
import SearchForId from '../../Utils/Hoc/Searchid.js'
import setSelected from '../../Utils/Actions/actions'
import { connect } from 'react-redux';
 
export default connect(null,{setSelected})(SearchForId(MenuLeft));