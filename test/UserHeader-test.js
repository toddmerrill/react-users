import React from 'react';
import { UserHeader } from '../src/components/Users';
import ReactTestUtils from 'react-addons-test-utils';
import mock from './user-mocks'

const shallowRenderer = ReactTestUtils.createRenderer();

it('UserHeader renders correctly', () => {
    const tree = shallowRenderer.render(
        <UserHeader users={mock.users} currentUser={mock.user} addUser={mock.f} removeUser={mock.f}/>
    );
    expect(tree).toMatchSnapshot();
});
