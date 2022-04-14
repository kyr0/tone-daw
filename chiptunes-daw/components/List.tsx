import { PropsWithChildren } from "react";
import { StyleProps } from "./interface/StyleProps";

export interface ListProps extends StyleProps, PropsWithChildren<any> {
    listStyle?: 'disc' | 'circle'
}

export const List = ({ style, children, listStyle }: ListProps) => {
    return (
        <div className="lists">
            <ul className={`list is-${listStyle || 'disc'}`} style={style}>
                {children}
            </ul>
        </div>
    )
}