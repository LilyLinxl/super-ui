import React from "react";
import className from "classnames";
export enum ButtonSize {
  Large = "lg",
  Small = "sm",
}
export enum ButtonType {
  Primary = "primary",
  Danger = "danger",
  Default = "default",
  Link = "link",
}
interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  href?: string;
  size?: string;
  btnType?: string;
  children?: React.ReactNode;
}

const Button: React.FC<BaseButtonProps> = (props) => {
  const { disabled, href, size, btnType, children } = props;
  const classnames = className("btn", {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: disabled && btnType === ButtonType.Link,
  });
  if (btnType === ButtonType.Link && href) {
    return (
      <a href={href} className={classnames}>
        {children}
      </a>
    );
  } else {
    return (
      <button disabled={disabled} className={classnames}>
        {children}
      </button>
    );
  }
};
export default Button;
