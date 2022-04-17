import { PropsWithChildren } from "react";
import { IdProps } from "./interface/IdProps";
import { StyleProps } from "./interface/StyleProps";

export type ColType = '1-of-2' | '1-of-3' | '2-of-3' | '1-of-4' | '2-of-4' | '3-of-4'

export interface RowProps extends StyleProps, PropsWithChildren<any>, IdProps {
    type: ColType
}

export const Col = ({ children, style, type, className, id }: RowProps) => (
    <div id={id} className={`col-${type} ${className}`} style={style}>{children}</div>
)