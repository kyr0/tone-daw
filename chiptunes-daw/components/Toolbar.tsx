import { PropsWithChildren } from "react";
import { IdProps } from "./interface/IdProps";
import { StyleProps } from "./interface/StyleProps";

export interface ToolbarProps extends StyleProps, PropsWithChildren<any>, IdProps {
    borderless?: boolean;
}

export const Toolbar = ({ id, children, style, className, borderless }: ToolbarProps) => (
    <div className="toolbar-wrapper">
        <div id={id} className={`toolbar ${className} ${borderless && 'is-borderless'}`} style={style}>{children}</div>
    </div>
)