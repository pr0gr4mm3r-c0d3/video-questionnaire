import { createContext } from 'react';
import { IQuestion } from '@/interfaces';

interface IPayloadUpdateQuestion {
	id: string;
	videoRecorder: string;
}

export interface QuestionsState {
	questions: IQuestion[];
}

export interface QuestionContextProps {
	questionsState: QuestionsState;
	updateQuestion: (payload: IPayloadUpdateQuestion) => void;
}

// eslint-disable-next-line prettier/prettier
export const QuestionsContext = createContext<QuestionContextProps>({} as QuestionContextProps);
