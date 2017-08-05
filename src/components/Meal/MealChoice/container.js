import MealChoice from './component.js';
import SearchForId from '../../Utils/Hoc/searchid.js'
import setSelected from './actions'
import { connect } from 'react-redux';
 
export default connect(null,{setSelected})(SearchForId(MealChoice));