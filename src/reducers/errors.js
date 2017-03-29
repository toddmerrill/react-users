import * as type from '../actions/types';

const errors = (state = [], action) => {
  switch (action.type) {
    case type.ADD_ERROR : {
      const newState = state.concat(action.error);
      // currently only used in dev for info
      // The error actions can be connected later
      // to a display message for the user
      return newState;
    }
    case type.RESET_ERRORS :
      return [];
    default:
      return state;
  }
};

export default errors;
