"use client";
import Link from "next/link";
import React, { ReactNode, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export interface NavbarItem {
  label: string;
  href: string;
}

interface NavbarV2Props {
  logo: ReactNode;
  textColor?: string;
  items: NavbarItem[];
}

const NavbarV2 = (props: NavbarV2Props) => {
  const { textColor = "text-white", logo, items } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();

  return (
    // desktop navbar
    <div>
      <div className="block md:hidden">
        <nav className="bg-dark border-gray-200 dark:bg-dark">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              {logo}
            </Link>

            <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <Link
                href="/profile"
                className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                id="user-menu-button"
                aria-expanded="false"
                data-dropdown-toggle="user-dropdown"
                data-dropdown-placement="bottom"
              >
                <span className="sr-only">Open user menu</span>
                <Image
                  className="w-8 h-8 rounded-full"
                  src="/docs/images/people/profile-picture-3.jpg"
                  alt="user photo"
                  width={32}
                  height={32}
                />
              </Link>

              <button
                data-collapse-toggle="navbar-user"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                  console.log(isMenuOpen);
                }}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            {isMenuOpen && (
              <div className="items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbar-user">
                <ul className="flex flex-col font-medium p-4 md:p-0 mt-4  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
                  {items.map((item, i) => (
                    <li key={i}>
                      <Link
                        href={item.href}
                        className={`block py-2 px-3 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 ${pathName.includes(item.href) ? "bg-blue-700" : ""}`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </nav>
      </div>

      <div className="hidden md:block">
        <div className="bg-dark">
          <div className="py-6 px-4">
            <div className="flex flex-wrap items-center justify-between">
              <div>
                <Link href="/">{logo}</Link>
              </div>
              <nav>
                <ul className={`navbar flex space-x-4 items-center text-xl font-medium ${textColor}`}>
                  {items.map((item, i) => (
                    <li key={i}>
                      <Link
                        className={`${pathName.includes(item.href) ? "underline underline-offset-8" : ""}`}
                        href={item.href}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarV2;
