// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/react-web/', // Ensure this matches your GitHub repository name
  plugins: [react()],
});
