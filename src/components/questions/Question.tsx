import { IQuestion } from '@/interfaces';
import { useNavigate } from 'react-router-dom';

interface IQuestionProps {
	question: IQuestion;
}
export const Question = ({
	question: { id, question, done },
}: IQuestionProps) => {
	const navigate = useNavigate();
	const handleClickToQuestion = () => {
		const path = `/question/${id}`;
		navigate(path);
	};
	return (
		<section className='card__question' onClick={handleClickToQuestion}>
			<div className='card__question-content'>done: {done.toString()}</div>
			<footer className='card__question-footer'>{question}</footer>
		</section>
	);
};
