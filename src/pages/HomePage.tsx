import { BtnComponent, ListQuestions, Title } from '@/components';
import { QuestionsContext } from '@/context';
import { useContext } from 'react';

export const HomePage = () => {
	const { questionsState } = useContext(QuestionsContext);
	const disabledBtn = () => questionsState.questions.some(({ done }) => done === false);
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
