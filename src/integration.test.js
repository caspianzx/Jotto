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
        success: false,
        guessedWords: [{ guessedword: unsuccessfulGuess, letterMatchCount: 3 }]
      };
      //toEqual is used with object as it is mutable
      expect(newState).toEqual(expectedState);
    });
    test('update state correctly for successful guess', () => {});
  });
  describe('some guessed words', () => {
    test('update state correctly for unsuccessful guess', () => {});
    test('update state correctly for successful guess', () => {});
  });
});
