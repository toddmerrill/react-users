import React from 'react';
import {UserHeader} from '../src/components/Users.js';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer.create(
        <UserHeader />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
