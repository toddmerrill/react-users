const getUserId = () => Math.random().toString(36).substr(2, 9);

export const newUser = () => ({userId: getUserId(), firstName: "First", lastName: "Last", age: "0"});
