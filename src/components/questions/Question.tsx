import { IQuestion } from '@/interfaces';

interface IQuestionProps {
	question: IQuestion;
}
export const Question = ({ question: { question, done } }: IQuestionProps) => {
	return (
		<section className='card__question'>
			<div className='card__question-content'>done: {done.toString()}</div>
			<footer className='card__question-footer'>{question}</footer>
		</section>
	);
};
