import { PropsWithChildren } from "react";
import { IdProps } from "./interface/IdProps";
import { StyleProps } from "./interface/StyleProps";

export interface HeroProps extends StyleProps, PropsWithChildren<any>, IdProps {
    variant?: 'flower' | 'dash'
}

export const Hero = ({ id, style, children, className, variant }: HeroProps) => {
    return (
        <div id={id} className={`hero-${variant || 'dash'} ${className || ''}`} style={style}>
            {children}
        </div>
    )
}