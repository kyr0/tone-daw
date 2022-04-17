import { PropsWithChildren } from "react";
import { IdProps } from "./interface/IdProps";
import { StyleProps } from "./interface/StyleProps";

export interface ListProps extends StyleProps, PropsWithChildren<any>, IdProps {
    centered?: boolean
    bordered?: boolean
    tableStyle?: React.CSSProperties
}

export const Table = ({ id, style, children, tableStyle, bordered, centered, className }: ListProps) => {
    return (
       <div className={`table-responsive ${className || ''}`} style={style}>
            <table id={id} style={tableStyle} className={`table ${bordered && 'is-bordered'} ${centered && 'is-centered'}`}>
                {children}
            </table>
        </div>
    )
}