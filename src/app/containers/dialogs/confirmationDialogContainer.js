import { connect } from 'react-redux';
import * as ActionTypes from '../../actions/types';
import * as Selectors from '../../selectors';
import ConfirmationDialog from '../../components/dialogs/confirmationDialog';

const mapStateToProps = (state) => {
  return {
    isOpen: Selectors.App.isConfirmationDialogOpen(state),
    onConfirm: Selectors.App.getConfirmationDialogOnConfirm(state)
  };
};

const mapDispatchToProps = {
  onDismissDialog: () => ({ type: ActionTypes.CLOSE_CONFIRMATION_DIALOG })
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmationDialog);
