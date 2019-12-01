import { getLetterMatchCount } from '../helpers/index';
import axios from 'axios';

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
  SET_SECRET_WORD: 'SET_SECRET_WORD'
};

/**
 * Returns Redux Thunk function that dispatches GUESS_WORD action
 * and conditionally CORRECT_GUESS action
 * @function - guessWord
 * @param {string} - guessedWord
 * @return {function} - Redux Thunk function
 */

export const guessWord = guessedWord => {
  return function(dispatch, getState) {
    const secretWord = getState().secretWord;
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);
    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: { guessedWord, letterMatchCount }
    });

    if (guessedWord === secretWord) {
      dispatch({
        type: actionTypes.CORRECT_GUESS
      });
    }
  };
};

export const getSecretWord = () => {
  return dispatch => {
    //mock address for testing purposes
    return axios.get('http://localhost:3030').then(response => {
      dispatch({
        type: actionTypes.SET_SECRET_WORD,
        payload: response.data
      });
    });
  };
};

//Async await version
// export const getSecretWord = () => {
//   return async dispatch => {
//     //mock address for testing purposes
//     const res = await axios.get('http://localhost:3030');
//     dispatch({ type: actionTypes.SET_SECRET_WORD, payload: res.data });
//   };
// };
