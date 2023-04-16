import * as types from '../types';
import { startGame } from './startGameAction';

const removeCard = cardArray => {
  cardArray.pop();
  return { type: types.REMOVE_CARD, payload: { cardArray } };
};
const flippedCard = cardFlipped => {
  return { type: types.FLIPPED_CARD, payload: { cardFlipped } };
};
const defuseCard = (defuseCardNumber, res) => {
  return { type: types.DEFUSE_CARD, payload: { defuseCardNumber, res } };
};
const catCard = () => {
  return { type: types.CAT_CARD };
};
const shuffleCard = () => {
  return { type: types.SHUFFLE_CARD };
};
const gameOver = () => {
  return { type: types.GAME_OVER };
};
const gameResult = () => {
  return { type: types.GAME_WON };
};
export const flipCard = () => (dispatch, getState) => {
  const { cardArray, defuseCardNumber } = getState().card;
  const card = cardArray[cardArray.length - 1];
  dispatch(flippedCard(card));
  if (card === 'Cat card') dispatch(catCard());
  if (card === 'Defuse card') dispatch(defuseCard(defuseCardNumber + 1, 'Added Defuse Card'));
  if (card === 'Exploding kitten card') {
    if (defuseCardNumber !== 0) dispatch(defuseCard(defuseCardNumber - 1, 'Defuse Card Used'));
    else {
      dispatch(gameOver());
      setTimeout(() => dispatch(startGame()), 2000);
    }
  }
  if (card === 'Shuffle card') {
    dispatch(shuffleCard());
    setTimeout(() => dispatch(startGame()), 1300);
  }
  if (cardArray.length === 0) {
    dispatch(gameResult());
    setTimeout(() => dispatch(startGame()), 2000);
  }
  dispatch(removeCard(cardArray));
};
