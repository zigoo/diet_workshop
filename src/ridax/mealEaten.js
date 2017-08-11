/* eslint-disable */
const eatenMeal = 'eatenMeal';

const initialState = {
  today: 1
};


export default function mealEaten (state = initialState , action ) {
  switch (action.type) {
    case eatenMeal:
      return {
        ...state,
        today: [...state.today, action.id]
      }
    default: 
      return {...state}
    }
}


