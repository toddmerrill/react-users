import React from 'react'
import { UserList } from '../src/components/Users.js'
import renderer from 'react-test-renderer'
import mock from './user-mocks'

it('UserList renders correctly', () => {
    const user = {userId: "testorama"}
    const userList = [user]
    const tree = renderer.create(
        <UserList users={userList} currentUser={user} userClick={mock.f}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
