import { IQuestion } from '@/interfaces';
import { findElement, getIndex } from '@/utils';

export const findNextOrPrevious = (
	questionsParams: IQuestion[],
	idQuestion: string,
	find: 'NEXT' | 'PREVIOUS'
): IQuestion | undefined => {
	const questions: IQuestion[] =
		find === 'NEXT' ? [...questionsParams] : [...questionsParams].reverse();
	const { index, lastIndex, isLastIndex, isFirstIndex } = getIndex(questions, idQuestion);
	if (!isLastIndex && !isFirstIndex) {
		const splicedToFirst = [...questions].splice(0, index);
		const splicedToLast = [...questions].splice(index, lastIndex);
		return findElement(splicedToLast, idQuestion) || findElement(splicedToFirst, idQuestion);
	}
	return findElement(questions, idQuestion);
};
