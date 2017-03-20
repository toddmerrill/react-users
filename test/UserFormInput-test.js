import React from 'react';
import { UserFormInput } from '../src/components/Users.js';
import renderer from 'react-test-renderer';
import mock from './user-mocks'

it('UserFormInput renders correctly', () => {
    const tree = renderer.create(
        <UserFormInput user={mock.user} fieldName='testFieldName' fieldLabel='testFieldLabel'/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
