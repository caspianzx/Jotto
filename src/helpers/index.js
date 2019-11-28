/* @params guessedWord - string
@params secretWord - string
returns numbers **/

export const getLetterMatchCount = (guessedWord, secretWord) => {
  //split word into individual letter
  //set function allows us to use .has function to identify similar letters
  const secretLetterSet = new Set(secretWord.split(''));
  const guessedLetterSet = new Set(guessedWord.split(''));
  return [...secretLetterSet].filter(letter => guessedLetterSet.has(letter))
    .length;
};
