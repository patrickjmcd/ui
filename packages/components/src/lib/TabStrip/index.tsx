import React from "react";

const unselectedStyle =
  "inline-block hover:cursor-pointer p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300";
const selectedStyle =
  "inline-block hover:cursor-pointer p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500";

interface TabStripProps {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
  tabs: { id: string; label: string; alertCount?: number }[];
}

const TabStrip = ({ selectedTab, setSelectedTab, tabs }: TabStripProps) => {
  return (
    <div className="text-sm mb-10 font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px">
        {tabs.map((tab) => (
          <li className="me-2" key={tab.id}>
            <span
              onClick={() => setSelectedTab(tab.id)}
              className={selectedTab === tab.id ? selectedStyle : unselectedStyle}
              aria-current={selectedTab === tab.id ? "page" : undefined}
            >
              {tab.alertCount ? (
                <span className="relative">
                  {tab.label}
                  <span className="inline-block px-2 py-1 text-xs font-semibold leading-none text-white transform translate-x-1/2 bg-red-600 rounded-full">
                    {tab.alertCount}
                  </span>
                </span>
              ) : (
                tab.label
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabStrip;
