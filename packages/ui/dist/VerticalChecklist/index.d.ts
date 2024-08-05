import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

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
declare const VerticalChecklist: (props: VerticalChecklistProps) => react_jsx_runtime.JSX.Element;

export { VerticalChecklist as default };
