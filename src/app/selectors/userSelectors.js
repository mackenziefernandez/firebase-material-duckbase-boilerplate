import * as Duckbase from 'duckbase';

export function getCurrentUser(state) {
  return Duckbase.getCurrentUser(state.firebase);
}

export function getDisplayName(state) {
  const user = getCurrentUser(state);
  return user && user.displayName;
}

export function getEmail(state) {
  const user = getCurrentUser(state);
  return user && user.email;
}

export function getUid(state) {
  const user = getCurrentUser(state);
  return user && user.uid;
}
