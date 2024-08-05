import StatusIcon from "../StatusIcon";
import React from "react";

export interface VerticalChecklistItemProps {
  condition: boolean;
  completedIcon: React.ReactElement;
  incompleteIcon: React.ReactElement;
  title: string;
  children: React.ReactNode;
}

const VerticalChecklistItem = ({
  condition,
  completedIcon,
  incompleteIcon,
  title,
  children,
}: VerticalChecklistItemProps) => {
  return (
    <li className="mb-10 ms-6">
      <span className="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-gray-900">
        <StatusIcon prop={condition} completedComponent={completedIcon} incompleteComponent={incompleteIcon} />
      </span>
      <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
      {children}
    </li>
  );
};

export default VerticalChecklistItem;
