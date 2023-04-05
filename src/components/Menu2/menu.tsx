import React, {
  CSSProperties,
  ReactNode,
  createContext,
  useState,
} from "react";
import classNames from "classnames";
type MenuMode = "vertical" | "horizontal";
type OnSelectCallback = (selectedIndex: number) => void;
export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  style?: CSSProperties;
  children?: ReactNode;
  onSelect?: OnSelectCallback;
}
interface IMenuContext {
  index: number;
  onSelect?: OnSelectCallback;
}

export const MenuContext = createContext<IMenuContext>({ index: 0 });

const Menu: React.FC<MenuProps> = (props) => {
  const { className, mode, style, onSelect, defaultIndex, children } = props;
  const [currentActive, setActive] = useState(defaultIndex);
  const classnames = classNames("super-menu", className, {
    [`menu-vertical`]: mode === "vertical",
  });

  const handleSelect = (index: number) => {
    setActive(index);
    onSelect && onSelect(index);
  };

  const passedContent: IMenuContext = {
    index: currentActive ? currentActive : 0,
    onSelect: handleSelect,
  };
  return (
    <ul className={classnames} style={style} data-testid={"test-menu"}>
      <MenuContext.Provider value={passedContent}>
        {children}
      </MenuContext.Provider>
    </ul>
  );
};
Menu.defaultProps = {
  defaultIndex: 0,
  mode: "horizontal",
};
export default Menu;
