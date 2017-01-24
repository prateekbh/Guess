import * as wordActions from '../actions/word-actions';
import * as gameActions from '../actions/game-actions';
import { LOAD } from 'redux-storage';

const initialState={
  wordsLoaded: false,
  words:[],
  lastWord: null,
};

const emptyGuessedLetter = {
  letter: null,
  index: -1,
};

function addLetterToGuess(){

}

export default function wordReducer(state = initialState, action) {
  const newState = Object.assign({}, state, {words: [...state.words]});
  switch (action.type) {
    case LOAD:
      return Object.assign({}, state, {wordsLoaded: true});
    break;
    case wordActions.FETCH_WORDS_SUCCESS:
      newState.words = newState.words.concat(action.data);
      newState.lastWord = newState.words[newState.words.length - 1]._id;
      return newState;
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
      const newWord = Object.assign({}, state.words[0], {guessedLetters: Object.assign([],state.words[0].guessedLetters)});
      newWord.guessedLetters.forEach((data,index)=>{
        if (!data.letter && !letterAdded) {
          newWord.guessedLetters[index] = {
            letter : action.data.letter,
            index : action.data.index,
          };
          letterAdded = true;
        }
      });
      return Object.assign({}, state, {words : [newWord, ...state.words.slice(1)]})
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
    case gameActions.WORD_GUESSED:
      newState.lastWord = newState.words.shift();
      return newState;
    break;
    default:
      return state
  }
}