import { actionTypes } from '../actions/index';

/**
 * @function - guessedWordReducer
 * @param {array} state - Array of Guessed words.
 * @param {object} action - action to be reduced.
 * @return {array} - new guessedWords state
 */

export default (state = [], action) => {
  //note: action argument here is different from actionTypes
  switch (action.type) {
    case actionTypes.GUESS_WORD:
      return [...state, action.payload];
    default:
      return state;
  }
};
