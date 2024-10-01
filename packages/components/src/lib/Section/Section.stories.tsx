import { Meta, StoryObj } from "@storybook/react";
import Section from "./index";
import React from "react";

const meta: Meta<typeof Section> = {
  title: "Components/Section",
  component: Section,
};

export default meta;
type Story = StoryObj<typeof Section>;

export const Default: Story = {
  args: {
    title: "Section Title",
    description: "Section Description",
  },
};

export const Collapsible: Story = {
  decorators: [
    (Story) => (
      <Story>
        <div className="mt-4">
          <p className="text-center text-gray-600">This is the collapsible content</p>
        </div>
      </Story>
    ),
  ],
  args: {
    title: "Collapsible Section",
    description: "This section is collapsible",
    collapsible: true,
  },
};
