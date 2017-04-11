import React from 'react';
// import renderer from 'react-test-renderer'
import Users from '../src/components/Users.js'
import mock from './user-mocks'
import LOG from '../src/util/logger'

import ReactTestUtils from 'react-addons-test-utils';


jest.mock('../src/util/logger');

it('Users renders correctly', () => {
  const renderer = ReactTestUtils.createRenderer();
    renderer.render(
        <Users users={{users: mock.users}} currentUser={mock.user} addUser={mock.f}
               deleteUser={mock.f} setCurrentUser={mock.f} persistUser={mock.f}
               updateUser={mock.f} onClick={mock.f}/>
    );
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
});
