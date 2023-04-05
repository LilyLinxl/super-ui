import React, { CSSProperties, ReactNode } from "react";
import classNames from "classnames";
export interface MenuItemProps {
  disabled?: boolean;
  index?: number;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}
const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { disabled, style, index, className, children } = props;

  const classes = classNames("menu-item", className, {
    "is-disabled": disabled,
  });

  return (
    <li className={classes} style={style}>
      {children}
    </li>
  );
};

export default MenuItem;
