import { BtnComponent, ListQuestions, Title } from '@/components';
import { QuestionsContext } from '@/context';
import { useContext } from 'react';

export const HomePage = () => {
	const { questions } = useContext(QuestionsContext);
	const disabledBtn = () => questions.some(({ done }) => done === false);
	return (
		<>
			<Title />
			<ListQuestions />
			<footer className='app__footer'>
				<BtnComponent disabled={disabledBtn()} label='Enviar' />
			</footer>
		</>
	);
};
