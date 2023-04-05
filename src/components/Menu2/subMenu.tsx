import React, { CSSProperties, ReactNode, useContext } from "react";
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
  const classes = classNames("menu-item submenu-item", className, {
    "is-active": context.index === index,
  });
  const renderChildren = () => {
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
    return <ul className="super-submenu">{subMenuChildren}</ul>;
  };
  return (
    <li className={classes} key={index}>
      <div className="submenu-title">{title}</div>
      {renderChildren()}
    </li>
  );
};
SubMenu.displayName = "SubMenu";
export default SubMenu;
