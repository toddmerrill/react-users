function users(state = [], action) {
    switch(action.type) {
        case 'ADD_USER' :
            console.log('adding user', action.user)
            return state;
        case 'UPDATE_USER' :
            console.log('updating user', action.userId, action.user)
            return state;
        case 'DELETE_USER' :
            console.log('deleting user', action.userId)
            return state;
        default:
            return state;
    }
}

export default users;
