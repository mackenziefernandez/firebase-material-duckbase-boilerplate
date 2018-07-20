import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'duckbase';
import { withRouter } from 'react-router';
import * as Selectors from '../selectors';
import App from '../components/app';
import { logoutUser } from '../actions/firebase_actions';
import * as ActionTypes from '../actions/types';

const mapStateToProps = (state) => {
  const userId = Selectors.User.getUid(state);

  return {
    drawerOpen: Selectors.App.isDrawerOpen(state),
    userId,
    userEmail: Selectors.User.getEmail(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleDrawerToggle: () => dispatch({ type: ActionTypes.TOGGLE_DRAWER }),
    logoutUser
  };
};

const mapPropsToPaths = (props) => props.userId ? [`/users/${props.userId}`] : [];

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  firebaseConnect(mapPropsToPaths)
)(App);