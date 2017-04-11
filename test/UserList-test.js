import React from 'react'
import { UserList } from '../src/components/Users.js'
import ReactTestUtils from 'react-addons-test-utils';
import mock from './user-mocks'

const shallowRenderer = ReactTestUtils.createRenderer();

it('UserList renders correctly', () => {
    const user = {userId: "testorama"}
    const userList = [user]
    const tree = shallowRenderer.render(
        <UserList users={userList} currentUser={user} userClick={mock.f}/>
    );
    expect(tree).toMatchSnapshot();
});
