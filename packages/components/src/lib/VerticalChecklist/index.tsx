import React from "react";
import ChecklistItem from "./ChecklistItem";
import { CubeIcon } from "@heroicons/react/24/outline";

interface ChecklistItemEntry {
  condition: boolean;
  title: string;
  children: React.ReactNode;
  completedIcon?: React.ReactElement;
  incompleteIcon?: React.ReactElement;
}

interface VerticalChecklistProps {
  completedIcon?: React.ReactElement;
  incompleteIcon?: React.ReactElement;
  items: ChecklistItemEntry[];
}

const defaultIcon = <CubeIcon className={"w-6 h-6 fill-blue-700"} />;
const VerticalChecklist = (props: VerticalChecklistProps) => {
  const { items, incompleteIcon, completedIcon } = props;
  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700">
      {items.map((item, i) => (
        <ChecklistItem
          key={i}
          condition={item.condition}
          completedIcon={item.completedIcon || completedIcon || defaultIcon}
          incompleteIcon={item.incompleteIcon || incompleteIcon || defaultIcon}
          title={item.title}
        >
          {item.children}
        </ChecklistItem>
      ))}
    </ol>
  );
};

export default VerticalChecklist;
