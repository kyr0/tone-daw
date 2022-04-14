import { EventHandler, PropsWithChildren } from "react";
import { Color } from "./interface/Color";
import { StyleProps } from "./interface/StyleProps";

export interface ButtonProps extends PropsWithChildren<any>, StyleProps {
    disabled?: boolean
    color?: Color
    onClick: EventHandler<any>
}

export const Button = ({ style: sx, children, disabled, color, onClick }: ButtonProps) => (
  <button className={`btn btn-${color || 'normal'} ${disabled ? 'btn-disabled' : ''}`} style={sx} onClick={disabled ? () => {} : onClick}>
    {children}
  </button>
)