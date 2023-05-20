import { BtnComponent, ListQuestions, Title } from '@/components';
import { Container } from '@mui/material';

export const App = () => {
	return (
		<Container maxWidth='xl' className='app__container'>
			<Title />
			<ListQuestions />
			<footer className='app__footer'>
				<BtnComponent label='Enviar' />
			</footer>
		</Container>
	);
};
