/* eslint-disable prettier/prettier */
import { questions } from '@/data';
import { QuestionsState } from './QuestionsContext';
// eslint-disable-next-line @typescript-eslint/naming-convention
export enum TYPE_QUESTIONS_CONTEXT_ACTIONS {
	UPDATE_QUESTION = 'UPDATE_QUESTION',
	RESET_QUESTIONS_STATE = 'RESET_QUESTIONS_STATE',
}

const { UPDATE_QUESTION, RESET_QUESTIONS_STATE } = TYPE_QUESTIONS_CONTEXT_ACTIONS;

export type QuestionAction =
	| {
			type: 'UPDATE_QUESTION';
			payload: { id: string; videoRecorder: string };
	  }
	| {
			type: 'RESET_QUESTIONS_STATE';
	  };

export const QuestionsReducer = (state: QuestionsState, action: QuestionAction): QuestionsState => {
	switch (action.type) {
		case UPDATE_QUESTION:
			// eslint-disable-next-line no-case-declarations
			const newQuestions = state.questions.map((question) =>
				question.id === action.payload.id ? { ...question, ...action.payload, done: true } : question
			);
			return {
				questions: newQuestions,
			};
		case RESET_QUESTIONS_STATE:
			return {
				questions,
			};
		default:
			return state;
	}
};
