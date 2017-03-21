import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import users from './users';
import currentUser from './currentUser';

const rootReducer = combineReducers({ user: {users,
                                     currentUser},
                                     routing: routerReducer });

export default rootReducer;
