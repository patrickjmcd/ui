import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';

type SectionProps = {
    title?: string;
    description?: string;
    yPadding?: string;
    xPadding?: string;
    children: ReactNode;
    className?: string;
    collapsible?: boolean;
    titleStyle?: string;
    descriptionStyle?: string;
    collapseButtonStyle?: string;
    collapsedByDefault?: boolean;
};
declare const Section: (props: SectionProps) => react_jsx_runtime.JSX.Element;

export { Section as default };
