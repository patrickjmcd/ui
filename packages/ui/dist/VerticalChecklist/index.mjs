import "../chunk-EBX6FPJB.mjs";

// src/components/VerticalChecklist/StatusIcon/index.tsx
var StatusIcon = ({ prop, completedComponent, incompleteComponent }) => {
  if (!!prop) {
    return completedComponent;
  }
  return incompleteComponent;
};
var StatusIcon_default = StatusIcon;

// src/components/VerticalChecklist/ChecklistItem/index.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var VerticalChecklistItem = ({
  condition,
  completedIcon,
  incompleteIcon,
  title,
  children
}) => {
  return /* @__PURE__ */ jsxs("li", { className: "mb-10 ms-6", children: [
    /* @__PURE__ */ jsx("span", { className: "absolute flex items-center justify-center w-6 h-6 bg-white rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-gray-900", children: /* @__PURE__ */ jsx(StatusIcon_default, { prop: condition, completedComponent: completedIcon, incompleteComponent: incompleteIcon }) }),
    /* @__PURE__ */ jsx("h3", { className: "mb-1 text-lg font-semibold text-gray-900 dark:text-white", children: title }),
    children
  ] });
};
var ChecklistItem_default = VerticalChecklistItem;

// src/components/VerticalChecklist/index.tsx
import { CubeIcon } from "@heroicons/react/24/outline";
import { jsx as jsx2 } from "react/jsx-runtime";
var defaultIcon = /* @__PURE__ */ jsx2(CubeIcon, { className: "w-6 h-6 fill-blue-700" });
var VerticalChecklist = (props) => {
  const { items, incompleteIcon, completedIcon } = props;
  return /* @__PURE__ */ jsx2("ol", { className: "relative border-s border-gray-200 dark:border-gray-700", children: items.map((item, i) => /* @__PURE__ */ jsx2(
    ChecklistItem_default,
    {
      condition: item.condition,
      completedIcon: item.completedIcon || completedIcon || defaultIcon,
      incompleteIcon: item.incompleteIcon || incompleteIcon || defaultIcon,
      title: item.title,
      children: item.children
    },
    i
  )) });
};
var VerticalChecklist_default = VerticalChecklist;
export {
  VerticalChecklist_default as default
};
//# sourceMappingURL=index.mjs.map