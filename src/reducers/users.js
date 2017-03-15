function users(state = [], action) {
    switch(action.type) {
        case 'ADD_USER' :
            console.log('adding user', action.user)
            return state;
        case 'UPDATE_USER' :
            console.log('updating user', action.user)
            console.log('state',JSON.stringify(state))
            state.map(user => {console.log(user.userId, action.user.userId === user.userId)});
            return state.map(user => user.userId === action.user.userId ? {...action.user} : user);
        case 'DELETE_USER' :
            console.log('deleting user', action.userId)
            return state;
        default:
            return state;
    }
}

export default users;
