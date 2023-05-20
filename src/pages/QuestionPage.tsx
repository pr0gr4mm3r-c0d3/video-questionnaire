import { useParams } from 'react-router-dom';

export const QuestionPage = () => {
	const { questionId } = useParams();

	return <h3>Question Page: {questionId}</h3>;
};
