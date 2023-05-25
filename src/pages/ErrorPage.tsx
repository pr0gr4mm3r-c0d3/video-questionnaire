import { BtnComponent } from '@/components';
import { Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const ErrorPage = () => {
	const navigate = useNavigate();
	const handleGoToHome = () => {
		navigate('/', { replace: true });
	};
	return (
		<Container className='page__404'>
			<Typography align='center' variant='h3'>
				Página no encontrada
			</Typography>
			<BtnComponent label='Ir a Inicio' onClick={handleGoToHome} />
		</Container>
	);
};
