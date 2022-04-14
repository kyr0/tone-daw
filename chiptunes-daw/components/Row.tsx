import { PropsWithChildren } from "react";
import { StyleProps } from "./interface/StyleProps";

export interface RowProps extends StyleProps, PropsWithChildren<any> {
}

export const Row = ({ children, style, className }: RowProps) => (
    <div className={`row ${className}`} style={style}>{children}</div>
)