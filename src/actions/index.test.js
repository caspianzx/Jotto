import moxios from 'moxios';

import { storeFactory } from '../../test/testUtils';
import { getSecretWord } from './index';

describe('getSecretWord action creator', () => {
  //install moxios as an adaptor for mock responses before each test
  beforeEach(() => {
    moxios.install();
  });
  //uninstall moxios after each test
  afterEach(() => {
    moxios.uninstall();
  });
  test('adds response word to state', () => {
    const secretWord = 'party';
    const store = storeFactory();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord
      });
    });
    //returning this promise will ensure that it will resolve before assertion
    return store.dispatch(getSecretWord()).then(() => {
      const newState = store.getState();
      expect(newState.secretWord).toBe(secretWord);
    });
  });
});

//Async await version

// describe('getSecretWord action creator', () => {
//   //install moxios as an adaptor for mock responses before each test
//   beforeEach(() => {
//     moxios.install();
//   });
//   //uninstall moxios after each test
//   afterEach(() => {
//     moxios.uninstall();
//   });
//   test('adds response word to state', async () => {
//     const secretWord = 'party';
//     const store = storeFactory();

//     moxios.wait(() => {
//       const request = moxios.requests.mostRecent();
//       request.respondWith({
//         status: 200,
//         response: secretWord
//       });
//     });
//     //returning this promise will ensure that it will resolve before assertion
//     await store.dispatch(getSecretWord());
//     const newState = await store.getState();
//     expect(newState.secretWord).toBe(secretWord);
//   });
// });
