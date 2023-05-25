/* eslint-disable prettier/prettier */
import { UISnackbar, UIState } from './UIContext';

// eslint-disable-next-line @typescript-eslint/naming-convention
export enum TYPE_UI_CONTEXT_ACTIONS {
	SET_ERROR = 'SET_ERROR',
	CLOSE = 'CLOSE',
	SET_RECORDING = 'SET_RECORDING',
}

const { SET_ERROR, CLOSE, SET_RECORDING } = TYPE_UI_CONTEXT_ACTIONS;
export type UIAction =
	| {
			type: TYPE_UI_CONTEXT_ACTIONS.SET_ERROR;
			payload: UISnackbar;
	  }
	| {
			type: TYPE_UI_CONTEXT_ACTIONS.CLOSE;
	  }
	| {
			type: TYPE_UI_CONTEXT_ACTIONS.SET_RECORDING;
			payload: boolean;
	  };

export const UIReducer = (state: UIState, action: UIAction): UIState => {
	switch (action.type) {
		case SET_ERROR:
			return { ...state, snackbar: { ...action.payload } };
		case CLOSE:
			return { ...state, snackbar: { ...state.snackbar, open: false } };
		case SET_RECORDING:
			return { ...state, recording: action.payload };

		default:
			return state;
	}
};
