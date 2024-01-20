import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), tsconfigPaths()],
  define: {
    __APP_ENV__: JSON.stringify(loadEnv(mode, process.cwd(), "VITE_")),
  },
}));
