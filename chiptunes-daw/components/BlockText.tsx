import { PropsWithChildren } from "react";
import { applyIfColorValue } from "./function/applyIfRealColor";
import { IdProps } from "./interface/IdProps";
import { StyleProps } from "./interface/StyleProps";

export interface BlockTextProps extends IdProps, StyleProps, PropsWithChildren<any> {
    shadow?: boolean;
    backgroundColor?: string;
}

export const BlockText = ({ id, style, children, className, shadow, backgroundColor }: BlockTextProps) => 
    <p id={id} style={{...style, ...applyIfColorValue(style || {}, 'backgroundColor', backgroundColor || '')}} className={`block-text ${shadow && 'is-shadow'} ${className}`}>{children}</p>