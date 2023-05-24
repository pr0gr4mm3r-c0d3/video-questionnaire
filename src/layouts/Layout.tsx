import Container from '@mui/material/Container';
import { Outlet } from 'react-router-dom';
import { QuestionsProvider } from '@/context';

export const Layout = () => {
	return (
		<Container maxWidth='xl' className='app__container'>
			<QuestionsProvider>
				<Outlet />
			</QuestionsProvider>
		</Container>
	);
};
