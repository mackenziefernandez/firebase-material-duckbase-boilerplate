import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  return { isAuthenticated: !!(state.currentUser && state.currentUser.uid) };
};

const AuthedRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  const renderComponent = props => {
    if (isAuthenticated) {
      return <Component {...props} />;
    }

    return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
  };

  return <Route {...rest} render={renderComponent} />;
};

export default withRouter(connect(mapStateToProps)(AuthedRoute));
