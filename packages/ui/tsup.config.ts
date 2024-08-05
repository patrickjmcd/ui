import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entry: [
    "src/components/Navbar/index.tsx",
    "src/components/Section/index.tsx",
    "src/components/VerticalChecklist/index.tsx",
  ],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  splitting: true,
  external: ["react"],
  ...options,
}));
