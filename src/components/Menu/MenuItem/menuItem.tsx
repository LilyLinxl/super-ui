import React from "react";

export interface MenuItemProps {
  label?: string;
  disabled?: boolean;
  key?: string;
}
const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { label, disabled, key } = props;
  return <div>{label}</div>;
};

export default MenuItem;
