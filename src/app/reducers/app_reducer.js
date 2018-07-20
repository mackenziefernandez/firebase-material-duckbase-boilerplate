import * as ActionTypes from '../actions/types';

const initialState = {
  confirmationDialog: {
    isOpen: false,
    onConfirm: () => { }
  },
  drawerOpen: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.OPEN_CONFIRMATION_DIALOG:
      return {
        ...state,
        confirmationDialog: {
          isOpen: true,
          onConfirm: action.onConfirm
        }
      };
    case ActionTypes.CLOSE_CONFIRMATION_DIALOG:
      return {
        ...state,
        confirmationDialog: {...initialState.confirmationDialog}
      };
    case ActionTypes.TOGGLE_DRAWER:
      return {
        ...state,
        drawerOpen: !state.drawerOpen
      };
    default:
      return state;
  }
}
