import R from 'ramda';
import LOG from '../util/logger';
import * as type from '../actions/types';

const users = (state = { isFetching: false, users: [] }, action) => {
  switch (action.type) {
    case type.FETCH_USERS :
      LOG.info('fetching users');
      return { ...state, isFetching: true };
    case type.RECEIVE_USERS :
      return { ...state, isFetching: false, users: action.users };
    case type.ADD_USER :
      LOG.info(`adding user: ${JSON.stringify(action.user)}`);
      return { ...state, users: state.users.concat(action.user) };
    case type.PERSIST_USER :
      LOG.info('persisting user to aws');
      return state;
    case type.USER_PERSISTED :
      LOG.info(`successfully persisted: ${JSON.stringify(action.user)}`);
      return state;
    case type.UPDATE_USER :
      LOG.info(`updating user: ${JSON.stringify(action.user)}`);
      return {
        ...state,
        users: state.users.map(
            user => (user.userId === action.user.userId ? { ...action.user } : user),
        ),
      };
    case type.USER_DELETED :
      LOG.info(`state: ${JSON.stringify(state)}`);
      return { ...state, users: R.without([action.user], state.users) };
    default:
      return state;
  }
};

export default users;
