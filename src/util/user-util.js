const generateUserId = () => Math.random().toString(36).substr(2, 9);

const newUser = () => ({ userId: generateUserId(), firstName: 'First', lastName: 'Last', age: '0' });

module.exports = {
  newUser,
  generateUserId,
};
