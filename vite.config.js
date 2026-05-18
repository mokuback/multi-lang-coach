import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import packageJson from './package.json'

const buildDate = new Date().toISOString().split('T')[0];

// https://vite.dev/config/
export default defineConfig({
  define: {
    __APP_VERSION__: JSON.stringify(packageJson.version),
    __BUILD_DATE__: JSON.stringify(buildDate),
  },
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('opencc-js')) return 'vendor-opencc';
            if (id.includes('react-markdown')) return 'vendor-markdown';
            if (id.includes('lucide-react')) return 'vendor-icons';
            if (id.includes('react')) return 'vendor-react';
            return 'vendor';
          }
          if (id.includes('scenarioPatterns_01.json')) return 'data-scenarios-01';
          if (id.includes('scenarioPatterns_02.json')) return 'data-scenarios-02';
        }
      }
    }
  }
})
