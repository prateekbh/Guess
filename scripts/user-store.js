import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import createEngine from 'redux-storage-engine-indexed-db';
import * as reducers from '../reducers/';
import * as storage from 'redux-storage';
import {SET_SCRABBLED_LETTERS} from '../actions/word-actions';
import {LOG_TIME} from '../actions/game-actions';
import {decryptWord} from '../utils/wordUtils';
let engine = createEngine('game-data');

function deleteWordsBeforeSaving(engine){
  async function cloneObject(state){
    return new Promise(resolve=>{
      setTimeout(()=>{
        resolve(JSON.parse(JSON.stringify(state)));
      },0);
    });
  }
  return {
    load: async()=> {
      const state = await engine.load();
      state.wordReducer.words = state.wordReducer.words.map(word => {
        word.word = decryptWord(word.encrypted_word);
        return word;
      });
      return state;
    },
    save: async(state) => {
      const newState = await cloneObject(state);
      newState.wordReducer.words = newState.wordReducer.words.map(word => {
        delete word.word;
        return word;
      });
      return engine.save(newState);
    }
  };
}

engine = deleteWordsBeforeSaving(engine);

const storageMiddleware = storage.createMiddleware(engine, [LOG_TIME]);
const load = storage.createLoader(engine);

const reducer = storage.reducer(combineReducers(reducers));
const logger = createLogger({
  predicate: (getState, action) => action.type !== LOG_TIME && action.type !== 'REDUX_STORAGE_SAVE'
});

let middlewares = [thunk, storageMiddleware];
!process.env.PROD && middlewares.push(logger);

const store = createStore(
  reducer,
  applyMiddleware(...middlewares)
);

load(store);

export default store;