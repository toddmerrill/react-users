// add new user
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

export const updateUser = (userId, user) => {
    console.log('calling updateUser', userId, user)
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

export const fetchUsersRequest = () => {
    return {
        type: 'FETCH_USERS_REQUEST',
        status,
        error,
        response
    }
}
