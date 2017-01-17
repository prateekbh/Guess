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

export default function wordReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD:
      return Object.assign({}, state, {wordsLoaded: true})
    break;
    case wordActions.SET_SCRABBLED_LETTERS:
      const newState = Object.assign({}, state);
      newState.words[0].scrabbledLetters = action.data;
      newState.words[0].guessedLetters = newState.words[0].word.split('').map(e=>'');
      return newState;
    break;
    default:
      return state
  }
}