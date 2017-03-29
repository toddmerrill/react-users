import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import users from './users';
import currentUser from './currentUser';
import errors from './errors';

const rootReducer = combineReducers(
  {
    users,
    currentUser,
    errors,
    routing: routerReducer,
  },
);

export default rootReducer;
