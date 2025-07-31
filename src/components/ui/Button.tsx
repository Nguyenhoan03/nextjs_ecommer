// src/components/Button.tsx
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  style?: React.CSSProperties;
}

const Button = ({ children, className = "", type = "button",id="", onClick, style }: ButtonProps) => (
  <button type={type} id={id} className={className} onClick={onClick} style={style}>
    {children}
  </button>
);

export default Button;