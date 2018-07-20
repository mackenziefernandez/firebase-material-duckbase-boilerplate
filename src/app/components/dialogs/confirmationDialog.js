import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class ConfirmationDialog extends React.Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onConfirm: PropTypes.func.isRequired,
    onDismissDialog: PropTypes.func.isRequired
  };

  onConfirm = () => {
    this.props.onConfirm();
    this.props.onDismissDialog();
  }

  render() {
    return (
      <div>
        <Dialog open={this.props.isOpen} onClose={this.props.onDismissDialog}>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogContent>This cannot be undone.</DialogContent>
          <DialogActions>
            <Button key={0} onClick={this.props.onDismissDialog}>Cancel</Button>
            <Button className='confirmButton' key={1} color='primary' onClick={this.onConfirm}>Confirm</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
