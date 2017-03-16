const usersApi = require('users-api');

export const setCurrentUser = user => {
    return {
        type: 'SET_CURRENT_USER',
        user
    }
}

// add new user
export const addUser = user => {
    return {
        type: 'ADD_USER',
        user
    }
}

export const updateUser = user => {
    return {
        type: 'UPDATE_USER',
        user
    }
}

export const persistUser = (userId, user) => {
    console.log('calling persistUser', userId, user)
    return {
        type: 'UPDATE_USER',
        userId,
        user
    }
}

export const deleteUser = userId => {
    return {
        type: 'DELETE_USER',
        userId
    }
}

export const requestUsers = () => {
    return {
        type: 'FETCH_USERS'
    }
}

export const receiveUsers = json => {
    return {
        type: 'RECEIVE_USERS',
        users: json
    }
}

export const fetchUsers = () => {
    return dispatch => {
        dispatch(requestUsers())
        usersApi.retrieveUsers().then(response => {
            console.log('GET Result: ' + JSON.stringify(response));
            dispatch(receiveUsers(response))
        }).catch(error => {
            console.log('HTTP GET failed: ' + JSON.stringify(error));
            throw new Error(error);
        });
    }


}
