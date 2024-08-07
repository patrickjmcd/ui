import React from "react";

interface StatusIconProps {
  prop: unknown;
  completedComponent: React.ReactElement;
  incompleteComponent: React.ReactElement;
}

const StatusIcon = ({ prop, completedComponent, incompleteComponent }: StatusIconProps) => {
  if (!!prop) {
    return completedComponent;
  }
  return incompleteComponent;
};

export default StatusIcon;
