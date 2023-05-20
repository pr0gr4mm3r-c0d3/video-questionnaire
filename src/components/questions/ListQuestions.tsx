import Container from '@mui/material/Container';
import { questions } from '@/data';

import { Question } from './Question';

export const ListQuestions = () => {
	return (
		<Container maxWidth='xl' className='list__questions-container'>
			{questions.map((question) => (
				<Question question={question} key={question.id} />
			))}
		</Container>
	);
};
