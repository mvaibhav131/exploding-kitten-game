import * as types from '../types';

const initialState = { cardArray: [], cardFlipped: 'Flip the Card', defuseCardNumber: 0, res: '' };

const cardReducer=(state = initialState, action) => {
  switch (action.type) {
    case types.START_GAME:
      return { ...state, cardArray: action.payload, cardFlipped: 'Flip the Card', defuseCardNumber: 0, res: 'New Cards Added' };
    case types.FLIPPED_CARD:
      const { cardFlipped } = action.payload;
      return { ...state, cardFlipped };
    case types.REMOVE_CARD:
      const { cardArray } = action.payload;
      console.log(cardArray);
      return { ...state, cardArray };
    case types.DEFUSE_CARD:
      const { defuseCardNumber, res } = action.payload;
      return { ...state, defuseCardNumber, res };
    case types.CAT_CARD:
      return { ...state, res: 'Safe For Now' };
    case types.SHUFFLE_CARD:
      return { ...state, res: 'Cards Will be Shuffled Again' };
    case types.GAME_OVER:
      return { ...state, res: 'GAME LOST, will be restarted in 2 seconds' };
    case types.GAME_WON:
      return { ...state, res: 'GAME WON, will be restarted in 2 seconds' };
    default:
      return state;
  }
};
export default cardReducer;