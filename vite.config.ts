import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';

dotenv.config({ path: 'config/config.env' });

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
