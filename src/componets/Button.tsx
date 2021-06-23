import { ButtonHTMLAttributes } from "react";

import "../styles/button.scss";

// tipagem das propriedades que um button pode receber (react)
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps) {
  return (
    // spreading all props from Button component
    <button className="button" {...props} />
  );
}
