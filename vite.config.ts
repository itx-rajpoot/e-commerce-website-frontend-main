import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const backendHost = env.VITE_API_URL || 'http://localhost:5000';

  return {
    server: {
      host: "::",
      port: 8080,
      proxy: {
        // Proxy /api to backend to avoid CORS during development
        '/api': {
          target: backendHost,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path,
          headers: {
            // Ensure backend sees the proxied origin as the backend host
            origin: backendHost,
          },
        },
        // Proxy uploads so asset requests are forwarded in dev
        '/uploads': {
          target: backendHost,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path,
          headers: {
            origin: backendHost,
          },
        },
      },
    },
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
