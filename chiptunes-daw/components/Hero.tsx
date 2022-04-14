import { PropsWithChildren } from "react";
import { StyleProps } from "./interface/StyleProps";

export interface HeroProps extends StyleProps, PropsWithChildren<any> {
    variant?: 'flower' | 'dash'
}

export const Hero = ({ style, children, className, variant }: HeroProps) => {
    return (
        <div className={`hero-${variant || 'dash'} ${className || ''}`} style={style}>
            {children}
        </div>
    )
}