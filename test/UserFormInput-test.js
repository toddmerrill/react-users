import React from 'react';
import { UserFormInput } from '../src/components/Users.js';
import renderer from 'react-test-renderer';

it('UserFormInput renders correctly', () => {
    const user = {firstName: 'testFirst', lastName: 'testLast', age: 12345 }
    const tree = renderer.create(
        <UserFormInput user={user}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
