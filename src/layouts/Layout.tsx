import { useMemo, useState } from 'react';
import Container from '@mui/material/Container';
import { Outlet } from 'react-router-dom';
import { QuestionsContext } from '@/context';
import { questions as questionsData } from '@/data';

export const Layout = () => {
	const [questions, setQuestions] = useState(questionsData);

	const contextValue = useMemo(() => {
		return {
			questions,
			setQuestions,
		};
	}, [questions]);

	return (
		<Container maxWidth='xl' className='app__container'>
			<QuestionsContext.Provider value={contextValue}>
				<Outlet />
			</QuestionsContext.Provider>
		</Container>
	);
};
