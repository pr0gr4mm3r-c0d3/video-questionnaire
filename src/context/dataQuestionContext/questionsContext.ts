import { createContext } from 'react';
import { questions } from '@/data';
import { IQuestion } from '@/interfaces';

export const QuestionsContext = createContext<{ questions: IQuestion[] }>({
	questions,
});
