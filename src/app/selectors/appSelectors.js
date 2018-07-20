export function isConfirmationDialogOpen(state) {
	return state.appReducer.confirmationDialog.isOpen;
}

export function getConfirmationDialogOnConfirm(state) {
	return state.appReducer.confirmationDialog.onConfirm;
}

export function isDrawerOpen(state) {
	return state.appReducer.drawerOpen;
}
