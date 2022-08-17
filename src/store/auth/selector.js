/* eslint-disable arrow-parens */
/* eslint-disable implicit-arrow-linebreak */

/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectAuthState = (state) => state.authStore || initialState;

const makeSelectLoading = () => createSelector(selectAuthState, (state) => state.isLoading);

const makeSelectError = () => createSelector(selectAuthState, (state) => state.error);

const makeSelectAuthenticated = () => createSelector(selectAuthState, (state) => state.authenticated);

const makeSelectCurrentUser = () => createSelector(selectAuthState, (state) => state.currentUser);

const makeSelectIsUpdatePasswordSuccess = () =>
  createSelector(selectAuthState, (state) => state.isUpdatePasswordSuccess);

const makeSelectIsUpdatePasswordFail = () => createSelector(selectAuthState, (state) => state.isUpdatePasswordFail);

export {
  selectAuthState,
  makeSelectLoading,
  makeSelectError,
  makeSelectAuthenticated,
  makeSelectCurrentUser,
  makeSelectIsUpdatePasswordSuccess,
  makeSelectIsUpdatePasswordFail,
};
