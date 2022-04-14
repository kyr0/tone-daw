import { PropsWithChildren } from "react";
import { Color } from "./interface/Color";
import { Size } from "./interface/Size";
import { StyleProps } from "./interface/StyleProps";

export interface TextProps extends StyleProps, PropsWithChildren<any> {
    color?: Color
    size?: Size
    centered?: boolean
    heading?: boolean
}

export const Text = ({ children, style, color, size, className, centered, heading }: TextProps) => {
    
    return (
        <p className={`text is-${color} is-${heading ? 'heading-' : ''}${size || 'medium'} ${className}`} style={{...style, textAlign: centered && 'center' || 'left'}}>{children}</p>
    )
}