import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './styles/index.scss';
import { App } from './App';

// eslint-disable-next-line prettier/prettier
const root: HTMLElement = document.getElementById('root') as HTMLElement;
createRoot(root).render(
	<StrictMode>
		<App />
	</StrictMode>
);
