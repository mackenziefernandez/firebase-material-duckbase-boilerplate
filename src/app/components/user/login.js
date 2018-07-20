import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import { loginUser, loginWithProvider } from '../../actions/firebase_actions';
import FirebaseLoginWidget from '../../components/firebaseLoginComponent';

import './login.scss';

class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.state = { message: '' };
  }

  render() {
    return (
      <Paper className='loginWidgetPaper'>
        <FirebaseLoginWidget />
      </Paper>
    );
  }
}

const mapDispatchToProps = { loginUser, loginWithProvider };

function mapStateToProps(state) {
  return { currentUser: state.currentUser };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserLogin));
