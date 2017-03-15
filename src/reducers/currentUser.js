const R = require('ramda')

function currentUser(state = [], action) {
    switch(action.type) {
        case 'SET_CURRENT_USER' :
            return {...action.user};
        default:
            return state;
    }
}

export default currentUser;
