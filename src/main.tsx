import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Title } from '@/components';

import './styles/index.scss';

// eslint-disable-next-line prettier/prettier
const root: HTMLElement = document.getElementById('root') as HTMLElement;
createRoot(root).render(
    <StrictMode>
        <Title />
    </StrictMode>
);
