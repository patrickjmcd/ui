import React from "react";
import "../src/globals.css";
import { ThemeProvider } from "next-themes";

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story: any) => (
      <ThemeProvider attribute="class">
        <Story />
      </ThemeProvider>
    ),
  ],

  tags: ["autodocs"],
};

export default preview;
