import { IQuestion } from '@/interfaces';

export const getIndex = (questions: IQuestion[], idQuestion: string) => {
	const index = questions.findIndex((question) => question.id === idQuestion);
	const lastIndex = questions.length - 1;
	const isLastIndex = index === lastIndex;
	const isFirstIndex = index === 0;
	return {
		index,
		lastIndex,
		isLastIndex,
		isFirstIndex,
	};
};
