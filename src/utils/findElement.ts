import { IQuestion } from '@/interfaces';

export const findElement = (questionsSpliced: IQuestion[], idQuestion: string) =>
	questionsSpliced.find((question) => question.id !== idQuestion && question.done === false);
