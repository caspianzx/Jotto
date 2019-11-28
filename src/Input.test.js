import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../test/testUtils';
import Input from './Input';

//factory setup function to create ShallowWrapper for Input Component
//dive functions goes one level deep into children component. Useful when using with higher order component
const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />).dive();
  console.log(wrapper.debug());
  return wrapper;
};

setup();

describe('render', () => {
  describe('word has not been guessed', () => {
    test('render component without errors', () => {});
    test('render input box', () => {});
    test('render submit button', () => {});
  });
  describe('word has been guessed', () => {
    test('does not render input box', () => {});
    test('does not render submit button', () => {});
  });
});

describe('updating state', () => {});
