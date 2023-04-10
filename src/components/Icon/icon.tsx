import React from "react";

import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import classname from "classnames";
type ThemeProps =
  | "primary"
  | "secondary"
  | "success"
  | "info"
  | "warning"
  | "danger"
  | "light"
  | "dark";

interface IconProps extends FontAwesomeIconProps {
  theme?: ThemeProps;
}
const Icon: React.FC<IconProps> = (props) => {
  const { theme, ...restProps } = props;
  const classes = classname("icon", { [`icon-${theme}`]: theme });

  return <FontAwesomeIcon className={classes} {...restProps} />;
};
export default Icon;
