import { PropsWithChildren } from "react";
import { StyleProps } from "./interface/StyleProps";

export interface MenuProps extends StyleProps, PropsWithChildren<any> {
}

export const Menu = ({ children, style }: MenuProps) => (
    <menu className="menu" style={style}>{children}</menu>
)