import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { FirebaseProvider } from 'duckbase';
import { createHashHistory } from 'history';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';

import App from './containers/appContainer';
import DevTools from './containers/DevTools';
import configureStore from './configureStore';
import * as FirebaseActions from '../app/actions/firebase_actions';
import * as FirebaseUtils from './utils/firebaseUtils';

// for bundling your styles
import './bundle.scss';
import './reset.scss';

const history = createHashHistory();
const store = configureStore(history);

// listen to user state change and wait for initial value
store.dispatch(FirebaseActions.listenToUser()).then(() => {
  // Now that they are logged in (either anonymously or not), render the React application to the DOM
  ReactDOM.render(
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <FirebaseProvider firebaseApp={FirebaseUtils.getFirebaseConnection()} store={store}>
          <Router>
            <div>
              <App />
              <DevTools />
            </div>
          </Router>
        </FirebaseProvider>
      </Provider>
    </MuiThemeProvider>
    , document.getElementById('react-root'));
});
