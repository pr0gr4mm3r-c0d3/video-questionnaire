import { IQuestion } from '@/interfaces';
import { useNavigate } from 'react-router-dom';
import { VideoQuestion } from './VideoQuestion';
import { BtnComponent } from '../BtnComponent';

interface IQuestionProps {
	question: IQuestion;
	// eslint-disable-next-line react/require-default-props
	controls?: boolean;
}
export const Question = ({ question, controls = false }: IQuestionProps) => {
	const navigate = useNavigate();
	const handleClickToQuestion = () => {
		const path = `/question/${question.id}`;
		navigate(path, { replace: true });
	};
	return (
		<section className='card__question'>
			<div className='card__question-content'>
				<VideoQuestion controls={controls} videoSrc={question.videoRecorder || ''} />
			</div>
			<footer className='card__question-footer'>
				<p>{question.question}</p>
				{!controls && (
					<div className='card__question-footer-containerBtn'>
						<BtnComponent onClick={handleClickToQuestion} label='Responder' color='success' />
					</div>
				)}
			</footer>
		</section>
	);
};
