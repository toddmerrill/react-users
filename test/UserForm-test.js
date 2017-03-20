import React from 'react';
import { UserForm } from '../src/components/Users.js';
import renderer from 'react-test-renderer';

it('UserForm renders correctly', () => {
    const user = {firstName: 'testFirst', lastName: 'testLast', age: 12345 }
    const tree = renderer.create(
        <UserForm user={user}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
