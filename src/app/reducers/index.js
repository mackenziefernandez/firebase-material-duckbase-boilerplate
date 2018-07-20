import { combineReducers } from 'redux';
import { firebaseReducer } from 'duckbase';
import AppReducer from './app_reducer';
import FireBaseUserReducer from './firebase_user_reducer';

const rootReducer = combineReducers({
  appReducer: AppReducer,
  currentUser: FireBaseUserReducer,
  firebase: firebaseReducer
});

export default rootReducer;
