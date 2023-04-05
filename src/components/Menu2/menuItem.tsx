import React, { CSSProperties, ReactNode, useContext } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";
export interface MenuItemProps {
  index?: number;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}
const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { disabled, style, index, className, children } = props;
  const context = useContext(MenuContext);
  const classes = classNames("menu-item", className, {
    "is-disabled": disabled,
    "is-active": context.index === index,
  });
  const handleClick = () => {
    if (context.onSelect && !disabled && typeof index === "number") {
      context.onSelect(index);
    }
  };

  return (
    <li className={classes} style={style} onClick={handleClick} key={index}>
      {children}
    </li>
  );
};
MenuItem.displayName = "MenuItem";
export default MenuItem;
