import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entry: [
    "src/components/Modal/index.tsx",
    "src/components/Navbar/index.tsx",
    "src/components/Section/index.tsx",
    "src/components/ThemeToggle/index.tsx",
    "src/components/VerticalChecklist/index.tsx",
  ],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  splitting: false,
  external: ["react"],
  ...options,
}));
