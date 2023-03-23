import React, { Children, useState } from "react";
import MenuItem, { MenuItemProps } from "./MenuItem/menuItem";
import classNames from "classnames";
import "./_styles.scss";
export enum MenuMode {
  Vertical = "vertical",
  Horizontal = "horizontal",
}

interface MenuProps {
  className?: string;
  mode?: MenuMode;
  items: MenuItemProps[];
  onClick?: Function;
  onSelect?: Function;
  selectedKey?: string;
}
const Menu: React.FC<MenuProps> = (props) => {
  const { className, mode, items, onClick, onSelect, selectedKey } = props;
  const [selectedItem, setSelectedItem] = useState(
    selectedKey || items?.[0].key
  );
  const defaultClick = (item: MenuItemProps) => {
    setSelectedItem(item.key);
  };
  const classnames = classNames("menu", className, {
    [`menu-${mode}`]: mode,
  });
  return (
    <div className={classnames}>
      {items.map((v: MenuItemProps) => {
        return (
          <div
            onClick={() => {
              v.disabled || (onClick ? onClick(v) : defaultClick(v));
            }}
            className={
              selectedItem === v.key
                ? `menu-item menu-${mode}-item-active`
                : "menu-item"
            }
            key={v.key}
          >
            <MenuItem {...v} />
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
