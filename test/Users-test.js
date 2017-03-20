import React from 'react'
import renderer from 'react-test-renderer'
const Users = require('../src/components/Users.js').default

it('UserList renders correctly', () => {
    const user = {userId: "testorama"}
    const userList = {users:[user]}
    const tree = renderer.create(
        <Users users={userList} currentUser={user}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
