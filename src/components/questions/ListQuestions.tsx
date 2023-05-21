import { useContext } from 'react';
import Container from '@mui/material/Container';
import { QuestionsContext } from '@/context';

import { IQuestion } from '@/interfaces';
import { Question } from './Question';

export const ListQuestions = () => {
	const { questions } = useContext<{ questions: IQuestion[] }>(
		QuestionsContext
	);
	return (
		<Container maxWidth='xl' className='list__questions-container'>
			{questions.map((question) => (
				<Question question={question} key={question.id} />
			))}
		</Container>
	);
};
