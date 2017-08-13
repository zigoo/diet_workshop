/* eslint-disable */
const isCollapsed = 'isCollapsed';
const isVisible = 'isVisible';
const removeVisible = 'removeVisible';

const initialState = {
  1:true,
  2:true,
  visible: 0 
};


export default function collapsed (state = initialState , action ) {
  switch (action.type) {
    case isCollapsed:
      return {
        ...state,
        [action.id]: action.collapsed,
      }
    case isVisible:
        return {
          ...state,
          visible: action.id
        }
    default: 
      return state;
    }
}
