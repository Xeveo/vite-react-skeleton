import { defineConfig } from "vite";
import pkg from "./package.json";

const dependencies = Object.keys(pkg.dependencies ?? {});
const devDependencies = Object.keys(pkg.devDependencies ?? {});

export default defineConfig({
  build: {
    target: ["es2020", "chrome80", "firefox57", "safari12", "edge80"],
    lib: {
      entry: "./src/index.ts",
      formats: ["cjs", "es"],
    },
    sourcemap: true,
    rollupOptions: {
      external: [...dependencies, ...devDependencies],
    },
  },
});
