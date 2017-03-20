import React from 'react'
import { UserHeader } from '../src/components/Users.js'
import renderer from 'react-test-renderer'
import mock from './user-mocks'

it('UserHeader renders correctly', () => {
    const tree = renderer.create(
        <UserHeader users={mock.users} currentUser={mock.user} addUser={mock.f} removeUser={mock.f}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
