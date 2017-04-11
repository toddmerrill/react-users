import React from 'react';
import { User } from '../src/components/Users.js'
import ReactTestUtils from 'react-addons-test-utils';

const shallowRenderer = ReactTestUtils.createRenderer();

import mock from './user-mocks'

it('User renders correctly', () => {
    const tree = shallowRenderer.render(
        <User user={mock.user} onClick={mock.f} isCurrentUser={true}/>
    );
    expect(tree).toMatchSnapshot();
});
