import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import createEngine from 'redux-storage-engine-localstorage';
import * as reducers from '../reducers/';
import * as storage from 'redux-storage';
import {SET_SCRABBLED_LETTERS} from '../actions/word-actions';
import {LOG_TIME} from '../actions/game-actions';

const engine = createEngine('game-data');
const storageMiddleware = storage.createMiddleware(engine);
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