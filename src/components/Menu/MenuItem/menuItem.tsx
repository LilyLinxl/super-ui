import React, { useState } from "react";
import classNames from "classnames";
import "./_styles.scss";
export interface MenuItemProps {
  label?: string;
  disabled?: boolean;
  key?: string;
  children?: MenuItemProps[];
  onClick?: Function;
}
const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { label, disabled, children } = props;
  const [childrenVisible, setChildrenVisible] = useState(false);
  const classnames = classNames("menu", {
    "menu-item-disabled": disabled,
  });
  const [selectedItem, setSelectedItem] = useState("" as any);
  const defaultClick = (item: MenuItemProps) => {
    setSelectedItem(item.key);
  };
  return (
    <>
      <div
        className={classnames}
        onMouseEnter={() => setChildrenVisible(!childrenVisible)}
        // onMouseLeave={() => setChildrenVisible(!childrenVisible)}
      >
        {label}
      </div>
      {childrenVisible && children?.length && (
        <div className="menu-item-children">
          {children?.map((v: MenuItemProps) => (
            <div
              key={v.key}
              onClick={() => {
                v.disabled || (v.onClick ? v.onClick(v) : defaultClick(v));
              }}
              className={
                selectedItem === v.key
                  ? `menu-sub-item menu-sub-item-active`
                  : "menu-sub-item"
              }
            >
              {v.label}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default MenuItem;
