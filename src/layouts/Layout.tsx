import Container from '@mui/material/Container';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
	return (
		<Container maxWidth='xl' className='app__container'>
			<Outlet />
		</Container>
	);
};
