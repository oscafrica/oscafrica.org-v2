import React from "react";
import classnames from "classnames";
import styles from "./Button.module.css";

interface ButtonProps {
  type: "submit" | "reset" | "button";
  size?: "default" | "small";
  name: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}
console.log(styles);
const Button: React.FC<ButtonProps> = ({ size = "default", className, children, type, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={classnames(styles["btn"], styles[`btn--${size}`], className)}
    >
      {children}
    </button>
  );
};

export type { ButtonProps };

export default Button;
