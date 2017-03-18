const usersApi = require('users-api');
const util = require('../user-util');

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
        user: util.newUser()
    }
}

export const updateUser = user => {
    return {
        type: 'UPDATE_USER',
        user
    }
}

export const requestPersistUser = () => {
    return {
        type: 'PERSIST_USER'
    }
}

export const userPersisted = (json) => {
    return {
        type: 'USER_PERSISTED',
        user: json
    }
}

export const persistUser = user => {
    console.log('calling persistUser', user)
    return dispatch => {
        if (!user.firstName && !user.lastName) {return}
        dispatch(requestPersistUser())
        usersApi.saveUser(user).then(response => {
            console.log('saveUser response', response)
            dispatch(userPersisted(response))
        }).catch(error => {
            console.log('HTTP POST failed: ' + JSON.stringify(error));
            return Promise.reject(error)
        });
    }
}

export const userDeleted = (user) => {
    return {
        type: 'USER_DELETED',
        user
    }
}

export const deleteUser = user => {
    console.log('calling deleteUser', user)
    return dispatch => {
        usersApi.deleteUser(user).then((response) => {
            console.log('successfully deleted user ' + user.userId + ': ' + JSON.stringify(response));
            dispatch(userDeleted(user))
        }).catch(error => {
            console.log('HTTP DELETE failed: ' + JSON.stringify(error));
        });
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

export const fetchUsers = init => {
    return dispatch => {
        dispatch(requestUsers())
        return usersApi.retrieveUsers().then(response => {
            console.log('GET Result: ' + JSON.stringify(response));
            dispatch(receiveUsers(response))
            if (init && response.users.length) {
                dispatch(setCurrentUser(response.users[0]))
            }
        }).catch(error => {
            console.log('HTTP GET failed: ' + JSON.stringify(error));
            return Promise.reject(error)
        });
    }


}
