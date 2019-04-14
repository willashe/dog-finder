import {
  TOGGLE_DOGS_VISIBLE,
  TOGGLE_PARKS_VISIBLE,
  SELECT_DOG,
} from './actionTypes';

const initialState = {
  dogsVisible: true,
  parksVisible: true,
  selectedDog: null
};

const rootReducer = (state = initialState, action) => {
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
    case SELECT_DOG: {
      const newDog = action.payload.dog;
      const oldDog = state.selectedDog;

      return {
        ...state,
        selectedDog: oldDog === null || newDog.name !== oldDog.name ? newDog : null,
      };
    }
    default:
      return state;
  }
};

export default rootReducer;