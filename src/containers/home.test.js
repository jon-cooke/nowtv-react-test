import React from 'react';
import { shallow } from 'enzyme';

import Home from './home';

it('renders correctly', () => {
  const props = {
    messages: [],
    loadMessages: () => {},
  };
  const tree = shallow(<Home.WrappedComponent {...props} />);
  expect(tree).toMatchSnapshot();
});

it('renders a single message correctly', () => {
  const props = {
    messages: [
      {
        id: 'cd445e6d-e514-424f-ba8f-16ec842002c6',
      },
    ],
    loadMessages: () => {},
  };
  const tree = shallow(<Home.WrappedComponent {...props} />);
  expect(tree).toMatchSnapshot();
});
