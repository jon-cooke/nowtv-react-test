import React from 'react';
import { mount } from 'enzyme';

import Message from './message';

it('should export a function', () => {
  expect(Message).toBeInstanceOf(Function);
});

const message = {
  id: 'cd445e6d-e514-424f-ba8f-16ec842002c6',
  userId: 'fe27b760-a915-475c-80bb-7cdf14cc6ef3',
  message: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
  timestamp: '2017-02-09T04:27:38Z',
  user: {
    id: 'fe27b760-a915-475c-80bb-7cdf14cc6ef3',
    firstName: 'Albert',
    lastName: 'Rose',
    email: 'arosec@bbb.org',
    avatar: 'http://dummyimage.com/100x100.jpg/5fa2dd/ffffff',
    ip: '20.79.231.223',
  },
};

it('renders correctly', () => {
  const tree = mount(<Message {...message} />);
  expect(tree).toMatchSnapshot();
});

it('does not render the email by default', () => {
  const tree = mount(<Message {...message} />);
  expect(tree.contains(message.user.email)).toBe(false);
});

it('renders the email after a mouseOver event', () => {
  const tree = mount(<Message {...message} />);
  tree.simulate('mouseover');
  expect(tree.text()).toEqual(expect.stringContaining(message.user.email));
});

it('does not render the email after a mouseOut event', () => {
  const tree = mount(<Message {...message} />);
  tree.simulate('mouseover');
  tree.simulate('mouseout');
  expect(tree.text()).toEqual(expect.not.stringContaining(message.user.email));
});
