import * as wordActions from '../actions/word-actions';
import { LOAD } from 'redux-storage';

const initialState={
  wordsLoaded: false,
  words:[
    {"word":"orange",
      "images":[
        "http://cache2.asset-cache.net/xt/614873110.jpg?v=1&g=fs1|0|SKP380|73|110&s=1&b=NTY1",
        "http://cache4.asset-cache.net/xt/594409073.jpg?v=1&g=fs1|0|EYM|09|073&s=1&b=RjI4",
        "http://cache2.asset-cache.net/xt/594856945.jpg?v=1&g=fs1|0|EYM|56|945&s=1&b=RjI4",
        "http://cache2.asset-cache.net/xt/594856945.jpg?v=1&g=fs1|0|EYM|56|945&s=1&b=RjI4"
        ]
    }
  ]
};

const emptyGuessedLetter = {
  letter: null,
  index: -1,
};

export default function wordReducer(state = initialState, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case LOAD:
      return Object.assign({}, state, {wordsLoaded: true});
    break;
    case wordActions.SET_SCRABBLED_LETTERS:
      newState.words[0].scrabbledLetters = action.data;
      newState.words[0].guessedLetters = newState.words[0].word.split('').map(e=>{
        return Object.assign({}, emptyGuessedLetter);
      });
      return newState;
    break;
    case wordActions.ADD_LETTER_TO_GUESSED_WORD:
      let letterAdded = false;
      newState.words[0].guessedLetters.forEach((data,index)=>{
        if (!data.letter && !letterAdded) {
          newState.words[0].guessedLetters[index].letter = action.data.letter;
          newState.words[0].guessedLetters[index].index = action.data.index;
          letterAdded = true;
        }
      });
      return newState;
    break;
    case wordActions.REMOVE_LETTER_TO_GUESSED_WORD:
      const removalLetter = action.data;
      newState.words[0].guessedLetters = newState.words[0].guessedLetters.map((data,index)=>{
        if (data.letter === removalLetter.letter && data.index === removalLetter.index) {
          return Object.assign({}, state, {wordsLoaded: true});
        } else {
          return newState.words[0].guessedLetters[index];
        }
      });
      return newState;
    break;
    default:
      return state
  }
}