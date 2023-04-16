import * as types from '../types';
import makeCard from '../genreateCard';

export const startGame = () => dispatch => {
  console.log(makeCard());
  dispatch({ type: types.START_GAME, payload: makeCard() });
};
