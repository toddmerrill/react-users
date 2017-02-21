// add new user
export function addUser(user) {
    return {
        type: 'ADD_USER',
        user
    }
}

export function updateUser(userId, user) {
    return {
        type: 'UPDATE_USER',
        userId,
        user
    }
}

export function deleteUser(userId) {
    return {
        type: 'DELETE_USER',
        userId
    }
}
