import { Meta, StoryObj } from "@storybook/react";
import StatusIcon from "./index";
import React from "react";
import { CheckIcon, ExclamationTriangleIcon } from "@heroicons/react/24/solid";

const meta: Meta<typeof StatusIcon> = {
  title: "VerticalChecklist/StatusIcon",
  component: StatusIcon,
};

export default meta;
type Story = StoryObj<typeof StatusIcon>;

const checkIcon = <CheckIcon className="w-6 h-6 fill-green-500" />;
const exclamIcon = <ExclamationTriangleIcon className="w-6 h-6 fill-yellow-500" />;

export const Default: Story = {
  args: {
    completedComponent: checkIcon,
    incompleteComponent: exclamIcon,
  },
};
