import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { appRouter } from './router';

import './styles/index.scss';

// eslint-disable-next-line prettier/prettier
const root: HTMLElement = document.getElementById('root') as HTMLElement;
createRoot(root).render(
	<StrictMode>
		<RouterProvider router={appRouter} />
	</StrictMode>
);
