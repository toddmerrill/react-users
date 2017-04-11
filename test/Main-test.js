import React from 'react'; 
import Main from '../src/components/Main.js'
import ReactTestUtils from 'react-addons-test-utils';

const shallowRenderer = ReactTestUtils.createRenderer();

it('Main renders correctly', () => {
  shallowRenderer.render(<Main />);
  const tree = shallowRenderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
