import { firebaseDb, firebaseAuth } from './firebaseUtils';

const FireBaseTools = {

  /**
   * Sign the user out
   *
   * @returns {!firebase.Promise.<*>|firebase.Thenable<any>|firebase.Promise<any>|!firebase.Thenable.<*>}
   */
  logoutUser: () => firebaseAuth.signOut().then(() => ({
    success: 1,
    message: 'logout',
  })),

  listenToUser: (callback) => new Promise((resolve, reject) => {
    firebaseAuth.onAuthStateChanged((user) => {
      callback(user);
      resolve(user);
    }, (error) => {
      reject(error);
    });
  }),

  /**
   * Update a user's profile data
   *
   * @param u
   * @returns {!firebase.Promise.<*>|firebase.Thenable<any>|firebase.Promise<any>|!firebase.Thenable.<*>}
   */
  updateUserProfile: u => firebaseAuth.currentUser.updateProfile(u).then(() => firebaseAuth.currentUser, error => ({
    errorCode: error.code,
    errorMessage: error.message,
  })),

  /**
   * Remove a user from the database entirely
   *
   * @returns {!firebase.Promise.<*>|firebase.Thenable<any>|firebase.Promise<any>|!firebase.Thenable.<*>}
   */
  removeUser: () => firebaseAuth.currentUser.delete().then(() => firebaseAuth.currentUser, error => ({
    errorCode: error.code,
    errorMessage: error.message,
  })),

  /**
   * Get the firebase database reference.
   *
   * @param path {!string|string}
   * @returns {!firebase.database.Reference|firebase.database.Reference}
   */
  getDatabaseReference: path => firebaseDb.ref(path)
};

export default FireBaseTools;
