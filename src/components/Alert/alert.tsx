import React, { useState } from "react";
import classNames from "classnames";

export enum AlertType {
  Success = "success",
  Danger = "danger",
  Default = "default",
  Warning = "warning",
}
export interface AlertProps {
  className?: string;
  alertType?: string;
  closeable?: boolean;
  title?: string;
  content?: string;
}

const Alert: React.FC<AlertProps> = (props) => {
  const { alertType, closeable, title, content, className, ...restProps } =
    props;
  const [visible, setVisible] = useState(true);
  const classnames = classNames("alert", className, {
    [`alert-${alertType}`]: alertType,
  });
  return visible ? (
    <div className={classnames} {...restProps}>
      <div>
        {title && <div>{title}</div>}
        {content && <p>{content}</p>}
      </div>
      {closeable && (
        <div className="close-btn" onClick={() => setVisible(false)}>
          关闭
        </div>
      )}
    </div>
  ) : (
    <></>
  );
};
export default Alert;
