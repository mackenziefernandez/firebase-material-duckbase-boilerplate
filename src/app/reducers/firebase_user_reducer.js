import * as ActionTypes from '../actions/types';

export default function (state = null, action) {
  switch (action.type) {
  case ActionTypes.FETCH_FIREBASE_USER:
    return action.payload;
  case ActionTypes.LOGOUT_FIREBASE_USER:
    return action.payload;
  case ActionTypes.REGISTER_FIREBASE_USER:
    return action.payload;
  case ActionTypes.LOGIN_FIREBASE_USER:
    return action.payload;
  case ActionTypes.UPDATE_FIREBASE_USER:
    return action.payload;
  case ActionTypes.LOGIN_WITH_PROVIDER_FIREBASE:
    return action.payload;
  default:
    return state;
  }
}
