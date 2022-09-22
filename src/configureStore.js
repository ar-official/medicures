import { configureStore } from '@reduxjs/toolkit';
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import createSagaMiddleware from 'redux-saga';
import { throttle } from 'lodash';

import monitorReducersEnhancer from './store/monitorReducers'
import loggerMiddleware from './store/logger'
import { loadState, saveState } from './store/localStorage';
import rootSaga from './store/sagas'
import rootReducer from './store/reducers';


const sagaMiddleware = createSagaMiddleware();

export const history = createBrowserHistory();
export default function configureAppStore() {

  const preloadedState = loadState();

  const store = configureStore({
    reducer: rootReducer(history),
    middleware: [sagaMiddleware,loggerMiddleware,routerMiddleware(history)],
    preloadedState,
    enhancers: [monitorReducersEnhancer]
  })

  // if (process.env.NODE_ENV !== 'production' && module.hot) {
  //   module.hot.accept('./reducers', () => store.replaceReducer(rootReducer(history)))
  // }  

  sagaMiddleware.run(rootSaga)

  store.subscribe(throttle(() => {
    saveState({
      // loginDetails : store.getState().loginDetails,
      // messagesById: store.getState().messagesById,
      // messagesPrimary : store.getState().messagesPrimary
    });
  }), 1000);

  return store
}

