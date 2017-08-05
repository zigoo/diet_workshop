import MealDescription from './component.js';
import SearchForId from '../../Utils/Hoc/searchid.js'
import { connect } from 'react-redux';


export default connect(null)(SearchForId(MealDescription));
