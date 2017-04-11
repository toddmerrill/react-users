import React from 'react';
import { UserForm } from '../src/components/Users.js';
import ReactTestUtils from 'react-addons-test-utils';
import mock from './user-mocks'

const shallowRenderer = ReactTestUtils.createRenderer();

it('UserForm renders correctly', () => {
    const tree = shallowRenderer.render(
        <UserForm user={mock.user} onBlur={mock.f} onChange={mock.f}/>
    );
    expect(tree).toMatchSnapshot();
});
