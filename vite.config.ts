import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import viteCompression from "vite-plugin-compression";
import eslintPlugin from "vite-plugin-eslint";
const SRC_DIR = path.resolve(__dirname, "./src");
const PUBLIC_DIR = path.resolve(__dirname, "./public");

export default defineConfig(async () => {
  const plugins = [
    react(),
    viteCompression(),
    checker({
      typescript: false,
      eslint: {
        lintCommand: "eslint --ext .tsx,.ts,.jsx,.js .",
      },
    }),
    eslintPlugin({
      include: ["src/**/*.tsx", "src/**/*.ts", "src/*.ts", "src/*.tsx"],
    }),
  ];

  return {
    plugins,
    resolve: {
      alias: {
        "@": SRC_DIR,
      },
    },
    server: {
      host: "0.0.0.0",
      open: true,
    },
    publicDir: PUBLIC_DIR,
  };
});
