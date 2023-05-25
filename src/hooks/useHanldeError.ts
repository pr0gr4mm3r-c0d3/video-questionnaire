import { UIContext } from '@/context';
import { useContext } from 'react';

export const useHandleError = () => {
	const { setError } = useContext(UIContext);
	const handleError = (err: unknown) => {
		// eslint-disable-next-line prettier/prettier
		const { message } = err as { message: string };
		setError({ open: true, message, status: 'error' });
	};
	return { handleError };
};
