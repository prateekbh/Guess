import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import createEngine from 'redux-storage-engine-localstorage';

import * as reducers from '../reducers/';
import * as storage from 'redux-storage';

const engine = createEngine('game-data');
const storageMiddleware = storage.createMiddleware(engine);
const load = storage.createLoader(engine);

const reducer = storage.reducer(combineReducers(reducers));
const logger = createLogger();
const store = createStore(
  reducer,
  applyMiddleware(thunk, logger, storageMiddleware)
);

load(store);

export default store;