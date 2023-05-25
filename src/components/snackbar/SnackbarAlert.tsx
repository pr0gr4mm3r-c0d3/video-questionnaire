import { useContext } from 'react';
import { Alert, Snackbar } from '@mui/material';
import { UIContext } from '@/context';

export const SnackbarAlert = () => {
	const { uiState } = useContext(UIContext);
	const { open, message, status } = uiState.snackbar;
	return (
		<Snackbar open={open} autoHideDuration={5000} anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}>
			<Alert severity={status} sx={{ width: 'max-content', display: 'flex', alignItems: 'center' }}>
				<p>{message}</p>
			</Alert>
		</Snackbar>
	);
};
