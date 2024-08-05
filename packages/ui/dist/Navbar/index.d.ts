import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';

interface NavbarItem {
    label: string;
    href: string;
}
interface NavbarV2Props {
    logo: ReactNode;
    textColor?: string;
    items: NavbarItem[];
}
declare const NavbarV2: (props: NavbarV2Props) => react_jsx_runtime.JSX.Element;

export { type NavbarItem, NavbarV2 as default };
