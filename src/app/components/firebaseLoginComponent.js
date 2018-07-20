import React, { Component } from 'react';
import * as firebaseui from 'firebaseui';
import * as FirebaseUtils from '../utils/firebaseUtils';

export default class LoginFirebase extends Component {
  componentDidMount() {
    const firebase = FirebaseUtils.getFirebase();
    const uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: (__authResult, __redirectUrl) => {
          return true;
        }
      },
      credentialHelper: firebaseui.auth.CredentialHelper.NONE,
      signInFlow: 'popup',
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
      ],
      signInSuccessUrl: '/'
    };

    if (this.uiWidget) {
      this.uiWidget.reset();
    } else {
      this.uiWidget = new firebaseui.auth.AuthUI(FirebaseUtils.getFirebaseConnection().auth());
    }

    this.uiWidget.start('#firebaseui-auth-container', uiConfig);
  }

  render() {
    return (
      <div className='firebaseLogin loginContainer'>
        <div id='firebaseui-auth-container' />
      </div>
    );
  }
}
