import React from "react";
import classNames from "classnames";

interface ButtonProps {
  type: "submit" | "reset" | "button";
  size: "default" | "small";
  name: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const buttonSize = {
  default: "py-6 px-10",
  small: "py-4 px-7"
};

const Button: React.FC<ButtonProps> = ({ size, className, children, type, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={classNames(
        "flex items-center bg-white font-medium hover:bg-primary rounded-primary duration-200 transition-all",
        buttonSize[size],
        className
      )}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  onClick: () => {},
  className: "",
  disabled: false
};

export type { ButtonProps };

export default Button;
