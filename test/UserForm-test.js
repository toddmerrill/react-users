import React from 'react';
import { UserForm } from '../src/components/Users.js';
import renderer from 'react-test-renderer';
import mock from './user-mocks'

it('UserForm renders correctly', () => {
    const tree = renderer.create(
        <UserForm user={mock.user} onBlur={mock.f} onChange={mock.f}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
