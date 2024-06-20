import { compose, createStore, applyMiddleware } from 'redux';
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import { thunk } from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
// import { loggerMiddleWare } from './middleware/logger';

import { rootSaga } from './root-saga';
import logger from 'redux-logger'

import { rootReducer } from './root-reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
  // blacklist user reducer
  // blacklist: ['user']
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

// redux saga code
const middleWares = [process.env.NODE_ENV !== 'production' && logger, sagaMiddleware].filter(Boolean);


// only run logger when in dev - thunk code
// const middleWares = [process.env.NODE_ENV !== 'production' && logger, thunk].filter(Boolean);



const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

// redux saga code
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);


