import { Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';
import { QuestionsProvider, UIProvider } from '@/context';
import { SnackbarAlert } from '@/components';

export const Layout = () => {
	return (
		<UIProvider>
			<SnackbarAlert />
			<Container maxWidth='xl' className='app__container'>
				<QuestionsProvider>
					<Outlet />
				</QuestionsProvider>
			</Container>
		</UIProvider>
	);
};
