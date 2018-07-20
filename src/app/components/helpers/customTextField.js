import React from 'react';
import PropTypes from 'prop-types';
import { omit } from 'lodash';
import TextField from '@material-ui/core/TextField';
import * as AppConstants from '../../constants/appConstants';

const noop = () => {};

export default class CustomTextField extends React.Component {
  static propTypes = {
    onEnterPressed: PropTypes.func,
    onEscapePressed: PropTypes.func
  };

  static defaultProps = {
    onEnterPressed: noop,
    onEscapePressed: noop
  };

  onKeyDown = (event) => {
    switch (event.keyCode) {
      case AppConstants.ESCAPE_KEY_CODE:
        this.props.onEscapePressed();
        break;
      case AppConstants.ENTER_KEY_CODE:
        this.props.onEnterPressed();
        break;
      default:
        break;
    }
  };

  render() {
    const otherProps = omit(this.props, ['onEnterPressed', 'onEscapePressed']);
    return <TextField onKeyDown={this.onKeyDown} {...otherProps} />;
  }
}
