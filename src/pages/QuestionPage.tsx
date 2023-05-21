import { useNavigate, useParams } from 'react-router-dom';
import { BtnComponent } from '@/components';
import { useContext } from 'react';
import { QuestionsContext } from '@/context';
import { findNextOrPrevious } from '@/helpers';

export const QuestionPage = () => {
	const { questionId } = useParams();
	const { questions } = useContext(QuestionsContext);
	const navigate = useNavigate();
	const handleBackOrNextQuestion = (step: 'PREVIOUS' | 'NEXT') => {
		const prev = questionId && findNextOrPrevious(questions, questionId, step);
		if (prev) navigate(`/question/${prev.id}`);
	};
	return (
		<section>
			<h3>Question Page: {questionId}</h3>
			<footer>
				<BtnComponent
					label='Atrás'
					color='success'
					onClick={() => handleBackOrNextQuestion('PREVIOUS')}
				/>
				<BtnComponent
					label='Siguiente'
					color='success'
					onClick={() => handleBackOrNextQuestion('NEXT')}
				/>
			</footer>
		</section>
	);
};
