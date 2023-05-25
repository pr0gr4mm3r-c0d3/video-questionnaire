import { createContext } from 'react';

export interface UISnackbar {
	open: boolean;
	message: string;
	status: 'error' | 'warning' | 'success';
}
export interface UIState {
	snackbar: UISnackbar;
	recording: boolean;
}

export interface UIContextProps {
	uiState: UIState;
	setError: (payload: UISnackbar) => void;
	closeSnackbar: () => void;
	setRecording: (payload: boolean) => void;
}

// eslint-disable-next-line prettier/prettier
export const UIContext = createContext<UIContextProps>({} as UIContextProps);
