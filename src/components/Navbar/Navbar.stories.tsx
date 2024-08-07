import { Meta, StoryObj } from "@storybook/react";
import Navbar from "./index";
import { MusicalNoteIcon } from "@heroicons/react/24/solid";
import React from "react";

const meta: Meta<typeof Navbar> = {
  title: "components/Navbar",
  component: Navbar,
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {
    items: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "About",
        href: "/about",
      },
      {
        label: "Contact",
        href: "/contact",
      },
    ],
    logo: <MusicalNoteIcon className="h-8 w-8 text-gray-800" />,
  },
};

export const Empty: Story = {
  args: {},
};
