import { useMemo, useReducer } from 'react';
import { UIContext, UISnackbar, UIState } from './UIContext';
import { UIReducer, TYPE_UI_CONTEXT_ACTIONS } from './UIReducer';

interface IQuestionProviderProps {
	children: JSX.Element | JSX.Element[];
}

const UI_INITIAL_STATE: UIState = { snackbar: { open: false, message: '', status: 'error' }, recording: false };

export const UIProvider = ({ children }: IQuestionProviderProps) => {
	const [uiState, dispatch] = useReducer<typeof UIReducer>(UIReducer, UI_INITIAL_STATE);

	const setError = (payload: UISnackbar) => {
		dispatch({ type: TYPE_UI_CONTEXT_ACTIONS.SET_ERROR, payload });
	};

	const closeSnackbar = () => {
		dispatch({ type: TYPE_UI_CONTEXT_ACTIONS.CLOSE });
	};
	const setRecording = (payload: boolean) => {
		dispatch({ type: TYPE_UI_CONTEXT_ACTIONS.SET_RECORDING, payload });
	};

	const contextValue = useMemo(() => ({ uiState, setError, closeSnackbar, setRecording }), [uiState]);

	return <UIContext.Provider value={contextValue}>{children}</UIContext.Provider>;
};
