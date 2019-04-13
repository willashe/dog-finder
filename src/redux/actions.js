import {
  TOGGLE_DOGS_VISIBLE,
  TOGGLE_PARKS_VISIBLE,
} from './actionTypes';

export function toggleDogsVisible() {
  return { type: TOGGLE_DOGS_VISIBLE };
}

export function toggleParksVisible() {
  return { type: TOGGLE_PARKS_VISIBLE };
}