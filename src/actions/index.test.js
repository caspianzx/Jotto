import { correctGuess, actionTypes } from './index';

describe('correct guess', () => {
  test('returns and action with type `CORRECT_GUESS`', () => {
    const action = correctGuess();
    expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
  });
});
