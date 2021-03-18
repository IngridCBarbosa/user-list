import {
  Store,
  createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';

import {
  apiMiddleware,
} from 'redux-api-middleware';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import {
  IAppState,
} from './appState';

import userReducer from './user/reducer';

export const middlewares = [thunk, apiMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const rootReducer = combineReducers<IAppState>({
  user: userReducer,
});

const configureStore = (): Store<IAppState> => createStore(rootReducer, undefined, applyMiddleware(...middlewares));

export default configureStore;
