import {
  TOGGLE_DOGS_VISIBLE,
  TOGGLE_PARKS_VISIBLE,
  SELECT_DOG,
} from './actionTypes';

export function toggleDogsVisible() {
  return { type: TOGGLE_DOGS_VISIBLE };
}

export function toggleParksVisible() {
  return { type: TOGGLE_PARKS_VISIBLE };
}

export function selectDog(dog) {
  return {
    type: SELECT_DOG,
    payload: { dog },
  };
}