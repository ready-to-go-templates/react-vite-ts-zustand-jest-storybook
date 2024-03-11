import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 500,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupTests.ts",
  },
  resolve: {
    alias: {
      "@app": "/src",
      "@components": "/src/components",
      "@pages": "/src/pages",
      "@lib": "/src/lib",
      "@assets": "/src/assets",
    },
  },
} as any)
