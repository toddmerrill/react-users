import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from './reducers/index';
import * as actionCreators from './actions/userActions';

const loggerMiddleware = createLogger();

const defaultState = {
  users: { isFetching: false, users: [] },
  currentUser: { firstName: '', lastName: '', age: '0' },
};

const enhancers = compose(
    applyMiddleware(thunkMiddleware, loggerMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
);

const store = createStore(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default; // eslint-disable-line global-require
    store.replaceReducer(nextRootReducer);
  });
}

store.dispatch(actionCreators.fetchUsers(true));

export default store;
