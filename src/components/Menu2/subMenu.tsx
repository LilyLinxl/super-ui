import React, { useState, ReactNode, useContext } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";
export interface SubMenuProps {
  index?: number;
  title?: string;
  className?: string;
  children?: ReactNode;
}
const SubMenu: React.FC<SubMenuProps> = (props) => {
  const { index, className, children, title } = props;
  const context = useContext(MenuContext);
  const [isOpen, setIsOpen] = useState(false);
  const classes = classNames("menu-item submenu-item", className, {
    "is-active": context.index === index,
  });
  let timer: any;
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  const handleMouseMove = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer);
    e.preventDefault();
    timer = setTimeout(() => {
      setIsOpen(toggle);
    }, 300);
  };
  const clickEvents =
    context.mode === "vertical"
      ? {
          onClick: handleClick,
        }
      : {};
  const hoverEvents =
    context.mode !== "vertical"
      ? {
          onMouseEnter: (e: React.MouseEvent) => handleMouseMove(e, true),
          onMouseLeave: (e: React.MouseEvent) => handleMouseMove(e, false),
        }
      : {};
  const renderChildren = () => {
    const subMenuClasses = classNames("super-submenu", {
      "menu-opened": isOpen,
    });
    const subMenuChildren = React.Children.map(children, (child, index) => {
      const subChild = child as React.FunctionComponentElement<SubMenuProps>;
      const { displayName } = subChild.type;
      if (displayName === "MenuItem") {
        return React.cloneElement(subChild, { index });
      } else {
        console.error(
          "Warning:Menu has a child which is not a MenuItem Component"
        );
      }
    });
    return <ul className={subMenuClasses}>{subMenuChildren}</ul>;
  };
  return (
    <li className={classes} key={index} {...hoverEvents}>
      <div className="submenu-title" {...clickEvents}>
        {title}
      </div>
      {renderChildren()}
    </li>
  );
};
SubMenu.displayName = "SubMenu";
export default SubMenu;
