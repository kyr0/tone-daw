import { PropsWithChildren } from "react";
import { StyleProps } from "./interface/StyleProps";

export interface ListProps extends StyleProps, PropsWithChildren<any> {
    centered?: boolean
    bordered?: boolean
    tableStyle?: React.CSSProperties
}

export const Table = ({ style, children, tableStyle, bordered, centered, className }: ListProps) => {
    return (
       <div className={`table-responsive ${className}`} style={style}>
            <table style={tableStyle} className={`table is-${bordered && 'bordered'} is-${centered && 'centered'}`}>
                {children}
            </table>
        </div>
    )
}