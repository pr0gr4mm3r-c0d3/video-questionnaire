import { Layout } from '@/layouts';
import { ErrorPage, HomePage, QuestionPage } from '@/pages';
import { createBrowserRouter } from 'react-router-dom';
import { RoutesPath } from './enums';

export const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{
				errorElement: <ErrorPage />,
				children: [
					{
						index: true,
						element: <HomePage />,
					},
					{
						path: RoutesPath.QUESTION_PAGE,
						element: <QuestionPage />,
					},
				],
			},
		],
	},
]);
