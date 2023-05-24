/* eslint-disable prettier/prettier */
import {  QuestionsState } from './QuestionsContext';

export const TYPE_QUESTIONS_CONTEXT_ACTIONS = {
	UPDATE_QUESTION: 'UPDATE_QUESTION',
};

const { UPDATE_QUESTION } = TYPE_QUESTIONS_CONTEXT_ACTIONS;

export type QuestionAction = {
	type: typeof UPDATE_QUESTION;
	payload: { id: string; videoRecorder: string };
};

export const QuestionsReducer = (state: QuestionsState, { type, payload }: QuestionAction): QuestionsState => {
	switch (type) {
		case UPDATE_QUESTION:
			// eslint-disable-next-line no-case-declarations
			const newQuestions = state.questions.map((question) =>
				question.id === payload.id ? { ...question, ...payload, done: true } : question
			);
			return {
				questions: newQuestions,
			};

		default:
			return state;
	}
};
