import { storeFactory } from '../test/testUtils';
import { guessWord } from './actions';

describe('guessWord action dispatcher', () => {
  const secretWord = 'party';
  const unsuccessfulGuess = 'train';

  describe('no guessed words', () => {
    let store;
    const initialState = { secretWord };
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    test('update state correctly for unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      //getState() functions returns and object
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        secretWord,
        success: false,
        guessedWords: [{ guessedWord: unsuccessfulGuess, letterMatchCount: 3 }]
      };
      //toEqual is used with object as it is mutable
      expect(newState).toEqual(expectedState);
    });
    test('update state correctly for successful guess', () => {
      //dispatch succesful guess
      store.dispatch(guessWord(secretWord));
      //get state and return as an object
      const newState = store.getState();
      //init expected state
      const expectedState = {
        ...initialState,
        secretWord,
        success: true,
        guessedWords: [{ guessedWord: secretWord, letterMatchCount: 5 }]
      };
      //assertion of state
      expect(newState).toEqual(expectedState);
    });
  });

  describe('some guessed words', () => {
    //stimulated guessedWord in inital state
    const guessedWords = [{ guessedWord: ' agile', letterMatchCount: 1 }];
    const initialState = {
      guessedWords,
      secretWord
    };

    let store;
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    test('update state correctly for unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();
      const expectedState = {
        secretWord,
        success: false,
        guessedWords: [
          ...guessedWords,
          { guessedWord: unsuccessfulGuess, letterMatchCount: 3 }
        ]
      };
      expect(newState).toEqual(expectedState);
    });
    test('update state correctly for successful guess', () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        secretWord,
        success: true,
        guessedWords: [
          ...guessedWords,
          { guessedWord: secretWord, letterMatchCount: 5 }
        ]
      };
      //assertion of expected state
      expect(newState).toEqual(expectedState);
    });
  });
});
