function users(state = {isFetching: false, users: []}, action) {
    switch(action.type) {
        case 'FETCH_USERS' :
            console.log('fetching users')
            return {...state, isFetching: true};
        case 'RECEIVE_USERS' :
            return {...state, isFetching: false, users: action.users.users};
        case 'ADD_USER' :
            console.log('adding user', action.user)
            return state;
        case 'PERSIST_USER' :
            console.log('persisting user to aws')
            return state;
            // return {isFetching: true};
        case 'USER_PERSISTED' :
        console.log('successfully persisted', action.user)
            // return {isFetching: false};
            return state;
        case 'UPDATE_USER' :
            console.log('updating user', action.user)
            return {...state, users: state.users.map(user => user.userId === action.user.userId ? {...action.user} : user)};
        case 'DELETE_USER' :
            console.log('deleting user', action.userId)
            return state;
        default:
            return state;
    }
}

export default users;
