import { ListQuestions, Title } from '@/components';
import { BtnSend } from '@/components/dialog';

export const HomePage = () => {
	return (
		<>
			<Title />
			<ListQuestions />
			<footer className='app__footer'>
				<BtnSend />
			</footer>
		</>
	);
};
