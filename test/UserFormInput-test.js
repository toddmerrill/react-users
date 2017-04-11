import React from 'react';
import { UserFormInput } from '../src/components/Users.js';
import ReactTestUtils from 'react-addons-test-utils';
import mock from './user-mocks'

const shallowRenderer = ReactTestUtils.createRenderer();

it('UserFormInput renders correctly', () => {
    const tree = shallowRenderer.render(
        <UserFormInput user={mock.user} fieldName='testFieldName' fieldLabel='testFieldLabel'/>
    );
    expect(tree).toMatchSnapshot();
});
