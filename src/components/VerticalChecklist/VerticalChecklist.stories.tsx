import { Meta, StoryObj } from "@storybook/react";
import VerticalChecklist from "./index";
import React from "react";
import { CheckIcon, ExclamationTriangleIcon } from "@heroicons/react/24/solid";

const meta: Meta<typeof VerticalChecklist> = {
  title: "VerticalChecklist/VerticalChecklist",
  component: VerticalChecklist,
};

const checkIcon = <CheckIcon className="w-6 h-6 fill-green-500" />;
const exclamIcon = <ExclamationTriangleIcon className="w-6 h-6 fill-yellow-500" />;

export default meta;
type Story = StoryObj<typeof VerticalChecklist>;

export const Default: Story = {
  args: {
    completedIcon: checkIcon,
    incompleteIcon: exclamIcon,
    items: [
      {
        condition: true,
        title: "Item 1",
        children: <p>Item 1 content</p>,
      },
      {
        condition: false,
        title: "Item 2",
        children: <p>Item 2 content</p>,
      },
      {
        condition: true,
        title: "Item 3",
        children: <p>Item 3 content</p>,
      },
    ],
  },
};
