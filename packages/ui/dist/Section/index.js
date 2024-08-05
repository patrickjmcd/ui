"use strict";Object.defineProperty(exports, "__esModule", {value: true});"use client";
require('../chunk-GFD5IHHL.js');

// src/components/Section/index.tsx
var _react = require('react');
var _solid = require('@heroicons/react/16/solid');
var _jsxruntime = require('react/jsx-runtime');
var Section = (props) => {
  const [collapsed, setCollapsed] = _react.useState.call(void 0, !!props.collapsedByDefault);
  const {
    yPadding = "py-5",
    xPadding = "px-3",
    titleStyle = "text-primary",
    descriptionStyle = "dark:text-gray-200 text-gray-700",
    collapseButtonStyle = "text-primary"
  } = props;
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: `mx-auto max-w-screen-lg ${xPadding} ${yPadding} ${props.className}`, children: [
    /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "flex items-center justify-between w-full p-5 mb-5 font-medium rtl:text-right rounded-t-xl gap-3", children: [
      /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "span", { className: `${collapsed ? "text-left" : "text-center w-full"}`, children: [
        props.title && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "h2", { className: `text-4xl font-bold ${titleStyle}`, children: props.title }),
        props.description && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: `mt-4 text-xl ${descriptionStyle}`, children: props.description })
      ] }),
      props.collapsible && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "button", { type: "button", onClick: () => setCollapsed(!collapsed), className: "h-6 w-6", children: collapsed ? /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _solid.ChevronDownIcon, { height: 24, width: 24, className: `${collapseButtonStyle} h-6 w-6 duration-75` }) : /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        _solid.ChevronDownIcon,
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


exports.default = Section_default;
//# sourceMappingURL=index.js.map