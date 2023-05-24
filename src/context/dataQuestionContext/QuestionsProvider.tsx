import { useMemo, useReducer } from 'react';
import { questions } from '@/data';
import { QuestionsContext, QuestionsState } from './QuestionsContext';
import { QuestionsReducer, TYPE_QUESTIONS_CONTEXT_ACTIONS } from './QuestionsReducer';

interface IQuestionProviderProps {
	children: JSX.Element | JSX.Element[];
}
interface IPayloadUpdateQuestion {
	id: string;
	videoRecorder: string;
}
const QUESTIONS_INITIAL_STATE: QuestionsState = { questions };

export const QuestionsProvider = ({ children }: IQuestionProviderProps) => {
	const [questionsState, dispatch] = useReducer<typeof QuestionsReducer>(QuestionsReducer, QUESTIONS_INITIAL_STATE);

	const updateQuestion = (payload: IPayloadUpdateQuestion) => {
		dispatch({ type: TYPE_QUESTIONS_CONTEXT_ACTIONS.UPDATE_QUESTION, payload });
	};

	const contextValue = useMemo(() => ({ questionsState, updateQuestion }), [questionsState]);

	return <QuestionsContext.Provider value={contextValue}>{children}</QuestionsContext.Provider>;
};
