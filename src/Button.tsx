import React from "react";
import { FC } from "react";

export interface ButtonProps {
    leftIcon: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
    const {} = props;

    return (
        <button className="text-text-purple-10" style={{ backgroundColor: "red" }}> Hello Button </button>
    )
}