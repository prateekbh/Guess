import * as wordActions from '../actions/word-actions';
import { LOAD } from 'redux-storage';

const initialState={
  wordsLoaded: false,
  words:[]
};

export default function wordReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD:
      return Object.assign({}, state, {wordsLoaded: true})
    break;
    default:
      return state
  }
}