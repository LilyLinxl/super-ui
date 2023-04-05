import React, {
  CSSProperties,
  ReactNode,
  createContext,
  useState,
} from "react";
import classNames from "classnames";
import { MenuItemProps } from "./menuItem";
type MenuMode = "vertical" | "horizontal";
type OnSelectCallback = (selectedIndex: string) => void;
export interface MenuProps {
  defaultIndex?: string;
  className?: string;
  mode?: MenuMode;
  style?: CSSProperties;
  children?: ReactNode;
  onSelect?: OnSelectCallback;
  defaultOpenSubMenus?: string[];
}
interface IMenuContext {
  index: string;
  onSelect?: OnSelectCallback;
  mode?: MenuMode;
  defaultOpenSubMenus?: string[];
}

export const MenuContext = createContext<IMenuContext>({ index: "0" });

const Menu: React.FC<MenuProps> = (props) => {
  const {
    className,
    mode,
    style,
    onSelect,
    defaultIndex,
    children,
    defaultOpenSubMenus,
  } = props;
  const [currentActive, setActive] = useState(defaultIndex);
  const classnames = classNames("super-menu", className, {
    [`menu-vertical`]: mode === "vertical",
    [`menu-horizontal`]: mode === "horizontal",
  });

  const handleSelect = (index: string) => {
    setActive(index);
    onSelect && onSelect(index);
  };

  const passedContent: IMenuContext = {
    index: currentActive ? currentActive : "0",
    onSelect: handleSelect,
    mode,
    defaultOpenSubMenus,
  };

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement =
        child as React.FunctionComponentElement<MenuItemProps>;
      const { displayName } = childElement.type;
      if (displayName === "MenuItem" || displayName === "SubMenu") {
        return React.cloneElement(childElement, { index: index.toString() });
      } else {
        console.error(
          "Warning:Menu has a child which is not a MenuItem Component"
        );
      }
    });
  };
  return (
    <ul className={classnames} style={style} data-testid={"test-menu"}>
      <MenuContext.Provider value={passedContent}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  );
};
Menu.defaultProps = {
  defaultIndex: "0",
  mode: "horizontal",
  defaultOpenSubMenus: [],
};
export default Menu;
