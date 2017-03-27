import LOG from '../util/logger';

const currentUser = (state = [], action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER' :
      LOG.info(`setting current user to ${JSON.stringify(action.user)}`);
      return { ...action.user };
    default:
      return state;
  }
};

export default currentUser;
