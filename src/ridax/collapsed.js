/* eslint-disable */
const isCollapsed = 'isCollapsed';

const initialState = {
  1:true,
  2:true
};


export default function collapsed (state = initialState , action ) {
  switch (action.type) {
    case isCollapsed:
      return {
        ...state,
        [action.id]: action.collapsed
      }
    default: 
      return {...state}
    }
}


