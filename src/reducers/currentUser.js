const R = require('ramda')

function currentUser(state = [], action) {
    switch(action.type) {
        case 'SET_CURRENT_USER' :
            console.log('setting current user to', action.user, {...action.user})
            return {...action.user};
        default:
            return state;
    }
}

export default currentUser;
