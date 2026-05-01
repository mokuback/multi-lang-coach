import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
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
