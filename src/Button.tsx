import React from "react";
import { FC } from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  leftIcon?: boolean;
  rightIcon?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
  const { children } = props;

  return (
    <>
      {/* <button
        className="btn px-2 py-3 normal-case text-base
        border-button-primary-rest rounded-sm bg-button-primary-rest text-button-primary-foreground
        hover:border-button-primary-hover hover:bg-button-primary-hover
        focus:border-button-primary-focussed focus:bg-button-primary-focussed
        disabled:text-button-primary-foreground disabled:bg-button-primary-rest disabled:border-button-primary-rest disabled:opacity-30" {...props}>
        {children}
      </button> */}
      <button {...props}> {children} </button>
    </>
  )
}
