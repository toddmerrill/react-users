import React from 'react'
import renderer from 'react-test-renderer'
import Users from '../src/components/Users.js'
import mock from './user-mocks'

it('Users renders correctly', () => {
    const tree = renderer.create(
        <Users users={{users: mock.users}} currentUser={mock.user} addUser={mock.f}
               deleteUser={mock.f} setCurrentUser={mock.f} persistUser={mock.f}
               updateUser={mock.f} onClick={mock.f}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
