import React from 'react'
import { UserList } from '../src/components/Users.js'
import renderer from 'react-test-renderer'

it('UserList renders correctly', () => {
    const user = {userId: "testorama"}
    const userList = [user]
    const tree = renderer.create(
        <UserList users={userList} currentUser={user}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
