import React from 'react';
import { User } from '../src/components/Users.js';
import renderer from 'react-test-renderer';
import mock from './user-mocks'

it('User renders correctly', () => {
    const tree = renderer.create(
        <User user={mock.user} onClick={mock.f} isCurrentUser={true}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
