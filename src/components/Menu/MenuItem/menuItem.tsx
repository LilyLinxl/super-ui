import React, { useState } from "react";
import classNames from "classnames";
export interface MenuItemProps {
  label?: string;
  disabled?: boolean;
  key?: string;
  children?: MenuItemProps[];
  onClick?: Function;
  mode?: String;
  className?: String;
}
const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { label, disabled, children, mode, className } = props;
  const [btnName, setBtnName] = useState("展开");
  const [childrenVisible, setChildrenVisible] = useState(false);
  const classnames = classNames(`${className}`, {
    "menu-item-disabled": disabled,
  });
  const [selectedItem, setSelectedItem] = useState("" as any);
  const clickHandle = (item: MenuItemProps) => {
    setSelectedItem(item.key);
    item.onClick && item.onClick(item);
  };

  return (
    <>
      {mode === "horizontal" ? (
        <div
          className={classnames}
          onMouseEnter={() => setChildrenVisible(!childrenVisible)}
        >
          <div>{label}</div>
        </div>
      ) : (
        <div className={classnames}>
          <div>{label}</div>
          {children?.length && (
            <div
              className="menu-btn"
              onClick={() => {
                setChildrenVisible(!childrenVisible);
                setBtnName(() => (childrenVisible ? "展开" : "收起"));
              }}
            >
              {btnName}
            </div>
          )}
        </div>
      )}

      {childrenVisible && children?.length && (
        <div
          className="menu-item-children"
          onMouseLeave={
            mode === "horizontal"
              ? () => setChildrenVisible(!childrenVisible)
              : () => null
          }
        >
          {children?.map((v: MenuItemProps) => (
            <div
              key={v.key}
              onClick={() => {
                v.disabled || clickHandle(v);
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
