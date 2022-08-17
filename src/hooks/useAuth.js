/* eslint-disable no-restricted-globals */
import { useDispatch, useSelector } from 'react-redux';
import { useInjectReducer, useInjectSaga } from '../utils';
import reducer from '../store/auth/reducer';
import saga from '../store/auth/saga';
import {
  registerRequest,
  loginRequest,
  getCurrentUserRequest,
  updateUserRequest,
  updateLoading,
  updatePasswordRequest,
} from '../store/auth/action';
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectAuthenticated,
  makeSelectCurrentUser,
  makeSelectIsUpdatePasswordSuccess,
  makeSelectIsUpdatePasswordFail,
} from '../store/auth/selector';

export const useAuthStore = () => {
  useInjectSaga({ key: 'globalStore', saga });
  useInjectReducer({ key: 'globalStore', reducer });

  const dispatch = useDispatch();

  const isLoading = useSelector(makeSelectLoading());
  const error = useSelector(makeSelectError());
  const auth = useSelector(makeSelectAuthenticated());
  const currentUser = useSelector(makeSelectCurrentUser());
  const isUpdatePasswordSuccess = useSelector(makeSelectIsUpdatePasswordSuccess());
  const isUpdatePasswordFail = useSelector(makeSelectIsUpdatePasswordFail());

  const registerUser = (data, callback) => {
    dispatch(registerRequest(data, callback));
  };

  const loginUser = (data, callbackSuccess, callbackFail) => {
    dispatch(loginRequest(data, callbackSuccess, callbackFail));
  };

  const getCurrentUser = () => {
    dispatch(getCurrentUserRequest());
  };

  const updateUser = (data, callbackSuccess, callbackFail) => {
    dispatch(updateUserRequest(data, callbackSuccess, callbackFail));
  };

  const updatePassword = (data) => {
    dispatch(updatePasswordRequest(data));
  };

  const updateAvatarLoading = (loading) => {
    dispatch(updateLoading(loading));
  };

  return {
    registerUser,
    loginUser,
    getCurrentUser,
    isLoading,
    error,
    auth,
    currentUser,
    isUpdatePasswordSuccess,
    isUpdatePasswordFail,
    updateUser,
    updateAvatarLoading,
    updatePassword,
  };
};
