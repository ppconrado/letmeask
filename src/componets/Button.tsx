import { ButtonHTMLAttributes } from "react";

import "../styles/button.scss";

// tipagem das propriedades que um button pode receber (react)
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

export function Button({ isOutlined = false, ...props }: ButtonProps) {
  return (
    // spreading all props from Button component
    <button className={`button ${isOutlined ? "outlined" : ""}`} {...props} />
  );
}
