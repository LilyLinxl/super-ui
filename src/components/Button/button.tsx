import React from "react";
import classNames from "classnames";
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
type NativeButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLElement>;
type NativeLinkProps = BaseButtonProps & React.LinkHTMLAttributes<HTMLElement>;

export type ButtonProps = Partial<NativeButtonProps & NativeLinkProps>;
const Button: React.FC<ButtonProps> = (props) => {
  const { disabled, href, size, btnType, children, className, ...restProps } =
    props;
  const classnames = classNames("btn", className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: disabled && btnType === ButtonType.Link,
  });
  if (btnType === ButtonType.Link && href) {
    return (
      <a {...restProps} href={href} className={classnames}>
        {children}
      </a>
    );
  } else {
    return (
      <button {...restProps} disabled={disabled} className={classnames}>
        {children}
      </button>
    );
  }
};
export default Button;
