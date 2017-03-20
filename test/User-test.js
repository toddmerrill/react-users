import React from 'react';
import { User } from '../src/components/Users.js';
import renderer from 'react-test-renderer';

it('User renders correctly', () => {
    const tree = renderer.create(
        <User user={{firstName: 'bla', lastName: 'bloo'}} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
