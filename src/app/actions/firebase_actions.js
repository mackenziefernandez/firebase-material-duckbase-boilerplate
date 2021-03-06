import * as ActionTypes from './types';
import FirebaseUserUtils from '../utils/user_firebase';

export function loginWithProvider(provider) {
  const request = FirebaseUserUtils.loginWithProvider(provider);
  return {
    type: ActionTypes.LOGIN_WITH_PROVIDER_FIREBASE,
    payload: request,
  };
}

export function registerUser(user) {
  const request = FirebaseUserUtils.registerUser(user);
  return {
    type: ActionTypes.REGISTER_FIREBASE_USER,
    payload: request,
  };
}

export function loginUser(user) {
  const request = FirebaseUserUtils.loginUser(user);
  return {
    type: ActionTypes.LOGIN_FIREBASE_USER,
    payload: request,
  };
}

export function listenToUser() {
  return (dispatch) => {
    return FirebaseUserUtils.listenToUser(user => {
      dispatch({ type: ActionTypes.FETCH_FIREBASE_USER, payload: user });
    });
  };
}

export function updateUser(user) {
  const request = FirebaseUserUtils.updateUserProfile(user);
  return {
    type: ActionTypes.UPDATE_FIREBASE_USER,
    payload: request,
  };
}

export function logoutUser(user) {
  const request = FirebaseUserUtils.logoutUser(user);
  return {
    type: ActionTypes.LOGOUT_FIREBASE_USER,
    payload: request
  };
}
