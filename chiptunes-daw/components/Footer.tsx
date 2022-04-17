import { PropsWithChildren } from "react";
import { IdProps } from "./interface/IdProps";
import { StyleProps } from "./interface/StyleProps";

export interface FooterProps extends StyleProps, IdProps, PropsWithChildren<any> {
}

export const Footer = ({ id, style, className, children }: FooterProps) => (
    <footer id={id} className={`footer ${className || ''}`} style={style}>{children}</footer>
)