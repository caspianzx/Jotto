import checkPropTypes from 'check-prop-types';
import { createStore } from 'redux';

import rootReducer from '../src/reducer/index';

//creating storeFactory

export const storeFactory = initialState => {
  return createStore(rootReducer, initialState);
};

//find attribute
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

//reusable check props
export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name
  );
  expect(propError).toBeUndefined();
};
