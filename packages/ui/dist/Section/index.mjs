"use client";
import "../chunk-EBX6FPJB.mjs";

// src/components/Section/index.tsx
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { jsx, jsxs } from "react/jsx-runtime";
var Section = (props) => {
  const [collapsed, setCollapsed] = useState(!!props.collapsedByDefault);
  const {
    yPadding = "py-5",
    xPadding = "px-3",
    titleStyle = "text-primary",
    descriptionStyle = "dark:text-gray-200 text-gray-700",
    collapseButtonStyle = "text-primary"
  } = props;
  return /* @__PURE__ */ jsxs("div", { className: `mx-auto max-w-screen-lg ${xPadding} ${yPadding} ${props.className}`, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between w-full p-5 mb-5 font-medium rtl:text-right rounded-t-xl gap-3", children: [
      /* @__PURE__ */ jsxs("span", { className: `${collapsed ? "text-left" : "text-center w-full"}`, children: [
        props.title && /* @__PURE__ */ jsx("h2", { className: `text-4xl font-bold ${titleStyle}`, children: props.title }),
        props.description && /* @__PURE__ */ jsx("div", { className: `mt-4 text-xl ${descriptionStyle}`, children: props.description })
      ] }),
      props.collapsible && /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setCollapsed(!collapsed), className: "h-6 w-6", children: collapsed ? /* @__PURE__ */ jsx(ChevronDownIcon, { height: 24, width: 24, className: `${collapseButtonStyle} h-6 w-6 duration-75` }) : /* @__PURE__ */ jsx(
        ChevronDownIcon,
        {
          height: 24,
          width: 24,
          className: `${collapseButtonStyle} h-6 w-6 rotate-180 duration-75`
        }
      ) })
    ] }),
    !collapsed && props.children
  ] });
};
var Section_default = Section;
export {
  Section_default as default
};
//# sourceMappingURL=index.mjs.map