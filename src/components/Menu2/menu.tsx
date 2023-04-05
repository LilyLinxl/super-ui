import React, { CSSProperties, ReactNode } from "react";
import classNames from "classnames";

type MenuMode = "vertical" | "horizontal";
interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  style?: CSSProperties;
  children?: ReactNode;
  onSelect?: (selectedIndex: number) => void;
}
const Menu: React.FC<MenuProps> = (props) => {
  const { className, mode, style, onSelect, defaultIndex, children } = props;

  const classnames = classNames("super-menu", className, {
    [`menu-vertical`]: mode === "vertical",
  });
  return (
    <ul className={classnames} style={style}>
      {children}
    </ul>
  );
};
Menu.defaultProps = {
  defaultIndex: 0,
  mode: "horizontal",
};
export default Menu;
