/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	root: '.',
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
		},
	},
});
