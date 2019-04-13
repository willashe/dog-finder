import {
  TOGGLE_DOGS_VISIBLE,
  TOGGLE_PARKS_VISIBLE,
} from './actionTypes';

const initialState = {
  dogsVisible: true,
  parksVisible: true,
};

const rootReducer = (state = initialState, action) => {
  console.log(action);
  console.log(state);

  switch (action.type) {
    case TOGGLE_DOGS_VISIBLE: {
      return {
        ...state,
        dogsVisible: !state.dogsVisible,
      };
    }
    case TOGGLE_PARKS_VISIBLE: {
      return {
        ...state,
        parksVisible: !state.parksVisible,
      };
    }
    default:
      return state;
  }
};

export default rootReducer;

// @TODO is this needed?
// export const getDogsVisible = (state) => {
//   console.log(state);
//   return state.dogsVisible;
// };