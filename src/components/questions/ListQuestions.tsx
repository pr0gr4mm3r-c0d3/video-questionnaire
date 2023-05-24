import { useContext } from 'react';
import Container from '@mui/material/Container';
import { QuestionsContext } from '@/context';
import { Question } from './Question';

export const ListQuestions = () => {
	const { questionsState } = useContext(QuestionsContext);
	return (
		<Container maxWidth='xl' className='list__questions-container'>
			{questionsState.questions.map((question) => (
				<Question question={question} key={question.id} />
			))}
		</Container>
	);
};
