import usersApi from 'users-api';
import * as type from './types';
import LOG from '../util/logger';

export const setCurrentUser = user => ({
  type: type.SET_CURRENT_USER,
  user,
});

// add new user
export const addUser = user => ({
  type: type.ADD_USER,
  user,
});

export const updateUser = user => ({
  type: type.UPDATE_USER,
  user,
});

export const requestPersistUser = () => ({
  type: type.PERSIST_USER,
});

export const userPersisted = json => ({
  type: type.USER_PERSISTED,
  user: json,
});

export const persistUser = (user) => {
  LOG.info(`calling persistUser ${JSON.stringify(user)}`);
  return (dispatch) => {
    if (!user.firstName && !user.lastName) { return; }
    dispatch(requestPersistUser());
    usersApi.saveUser(user).then((response) => {
      LOG.info(`saveUser response: ${JSON.stringify(response)}`);
      dispatch(userPersisted(response));
    }).catch((error) => {
      LOG.error(`HTTP POST failed: ${JSON.stringify(error)}`);
      return Promise.reject(error);
    });
  };
};

export const userDeleted = user => ({
  type: type.USER_DELETED,
  user,
});

export const deleteUser = (user) => {
  LOG.info(`calling deleteUser: ${JSON.stringify(user)}`);
  return (dispatch) => {
    usersApi.deleteUser(user).then((response) => {
      LOG.info(`successfully deleted user ${user.userId}: ${JSON.stringify(response)}`);
      dispatch(userDeleted(user));
    }).catch((error) => {
      LOG.error(`HTTP DELETE failed: ${JSON.stringify(error)}`);
    });
  };
};

export const requestUsers = () => ({
  type: type.FETCH_USERS,
});

export const receiveUsers = users => ({
  type: type.RECEIVE_USERS,
  users,
});

export const fetchUsers = init => (dispatch) => {
  dispatch(requestUsers());
  return usersApi.retrieveUsers().then((response) => {
    LOG.info(`GET Result: ${JSON.stringify(response)}`);
    dispatch(receiveUsers(response.users));
    if (init && response.users.length) {
      dispatch(setCurrentUser(response.users[0]));
    }
  }).catch((error) => {
    LOG.error(`HTTP GET failed: ${JSON.stringify(error)}`);
    return Promise.reject(error);
  });
};
