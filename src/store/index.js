import {createStore, applyMiddleware, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from '@redux-devtools/extension';

import reducers from './reducers';
import sagas from './sagas';
import {colors} from '../assets';

export const APP_INIT = 'APP_INIT';

const sagaMiddleware = createSagaMiddleware();

const composedEnhancers = composeWithDevTools(
  applyMiddleware(...[sagaMiddleware]),
);

const reducer = combineReducers(reducers);

const rootReducer = (state = {}, action) => {
  let newState;
  newState = state;
  return reducer(newState, action);
};

export const store = createStore(rootReducer, composedEnhancers);

sagaMiddleware.run(sagas);

export default store;
