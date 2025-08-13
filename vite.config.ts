import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
  base: '/ap-physiques-forge/', // MUST match your GitHub repo name exactly
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    },
  },
  base: mode === 'production' ? '/ap-physiques-forge/' : '/', // Add this line
}));
