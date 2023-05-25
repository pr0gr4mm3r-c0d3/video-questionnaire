import { useNavigate, useParams } from 'react-router-dom';
import { BtnComponent, Question } from '@/components';
import { useContext, useEffect, useState } from 'react';
import { QuestionsContext, UIContext } from '@/context';
import { findNextOrPrevious } from '@/helpers';
import { IQuestion } from '@/interfaces';
import { BtnSend } from '@/components/dialog';

export const QuestionPage = () => {
	const [currentQuestion, setCurrentQuestion] = useState<IQuestion>();
	const [nextOrPrevious, setNextOrPrevious] = useState<IQuestion>();
	const { questionId } = useParams();
	const { questionsState } = useContext(QuestionsContext);
	const { uiState } = useContext(UIContext);
	const navigate = useNavigate();
	const handleBackToHome = () => navigate('/');
	const handleBackOrNextQuestion = (step: 'PREVIOUS' | 'NEXT') => {
		const nextOrPrev = questionId && findNextOrPrevious(questionsState.questions, questionId, step);
		if (nextOrPrev && nextOrPrev.id !== questionId) {
			setCurrentQuestion(nextOrPrev);
			navigate(`/question/${nextOrPrev.id}`, { replace: true });
		}
	};
	useEffect(() => {
		const findQuestion = questionsState.questions.find(({ id }) => id === questionId);
		if (findQuestion) setCurrentQuestion(findQuestion);
		const next = questionId && findNextOrPrevious(questionsState.questions, questionId, 'NEXT');
		setNextOrPrevious(next || undefined);
	}, [questionId, questionsState]);

	return (
		<section className='questionPage__container'>
			<header>
				<BtnComponent label='Ir a Preguntas' color='primary' onClick={handleBackToHome} />
			</header>
			<article className='questionPage__content'>
				{currentQuestion && <Question controls question={currentQuestion} />}
				<footer className='questionPage__content-footer'>
					<BtnComponent
						disabled={!nextOrPrevious || uiState.recording}
						label='Atrás'
						color='success'
						onClick={() => handleBackOrNextQuestion('PREVIOUS')}
					/>
					{!nextOrPrevious && <BtnSend />}
					{nextOrPrevious && (
						<BtnComponent
							disabled={uiState.recording}
							label='Siguiente'
							color='success'
							onClick={() => handleBackOrNextQuestion('NEXT')}
						/>
					)}
				</footer>
			</article>
		</section>
	);
};
